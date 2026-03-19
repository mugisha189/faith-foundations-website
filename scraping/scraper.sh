#!/bin/bash

# Website Scraper Script
# Usage: ./scraper.sh "https://example.com"

set -e

# Colors for progress bar
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
GRAY='\033[0;37m'
NC='\033[0m' # No Color

# Progress bar function
progress_bar() {
    local current=$1
    local total=$2
    local width=50
    local percentage=$((current * 100 / total))
    local filled=$((current * width / total))
    local empty=$((width - filled))
    
    printf "\r${BLUE}Progress: ["
    printf "%*s" $filled | tr ' ' '█'
    printf "%*s" $empty | tr ' ' '░'
    printf "] ${percentage}%%${NC}"
    
    if [ $current -eq $total ]; then
        printf "\n${GREEN}Complete!${NC}\n"
    fi
}

# Check if URL is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 \"https://example.com\""
    exit 1
fi

URL="$1"
# Extract the last path segment from URL for folder name
PATH_NAME=$(echo "$URL" | sed 's|/$||' | sed 's|.*/||')
# If no path (just domain), use the domain
if [ -z "$PATH_NAME" ] || [ "$PATH_NAME" = "$(echo "$URL" | sed -e 's|^https://||' -e 's|^http://||' -e 's|/.*||')" ]; then
    PATH_NAME=$(echo "$URL" | sed -e 's|^https://||' -e 's|^http://||' -e 's|/.*||')
fi
FOLDER_NAME="${PATH_NAME}_$(date +%Y%m%d_%H%M%S)"
BASE_DIR="$(dirname "$0")"

echo -e "${YELLOW}Scraping: $URL${NC}"
echo -e "${YELLOW}Path name: $PATH_NAME${NC}"
echo -e "${YELLOW}Output folder: $FOLDER_NAME${NC}"

# Create output directory
OUTPUT_DIR="$BASE_DIR/$FOLDER_NAME"
mkdir -p "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR/assets/css"
mkdir -p "$OUTPUT_DIR/assets/js"
mkdir -p "$OUTPUT_DIR/assets/images"

# Download the main HTML
echo -e "\n${BLUE}[1/4]${NC} Downloading HTML..."
curl -s -L "$URL" -o "$OUTPUT_DIR/index.html"
progress_bar 1 1

# Extract base URL from the HTML file
echo -e "${BLUE}Extracting base URL from HTML...${NC}"
# Look for the base URL in the HTML file
BASE_URL_FROM_HTML=$(grep -o 'href="[^"]*/assets/[^"]*"' "$OUTPUT_DIR/index.html" | head -1 | sed 's/href="//g' | sed 's/"//g' | sed 's|/assets/.*||')
if [ -z "$BASE_URL_FROM_HTML" ]; then
    # Fallback to original URL if no base found
    BASE_URL_FROM_HTML=$(echo "$URL" | sed 's|/[^/]*$||')
fi
echo -e "${GREEN}Base URL detected: $BASE_URL_FROM_HTML${NC}"

# Process HTML to extract and download CSS and JS
echo -e "\n${BLUE}[2/4]${NC} Processing assets..."

# Count total assets for progress tracking
CSS_COUNT=$(grep -o 'href="[^"]*\.css"' "$OUTPUT_DIR/index.html" | wc -l | tr -d ' ')
JS_COUNT=$(grep -o 'src="[^"]*\.js"' "$OUTPUT_DIR/index.html" | wc -l | tr -d ' ')
IMG_COUNT=$(grep -oE '(src|href)="[^"]*\.(jpg|jpeg|png|gif|webp|svg|ico)"' "$OUTPUT_DIR/index.html" | wc -l | tr -d ' ')
TOTAL_ASSETS=$((CSS_COUNT + JS_COUNT + IMG_COUNT))

if [ $TOTAL_ASSETS -eq 0 ]; then
    echo -e "${YELLOW}No assets found to download.${NC}"
else
    echo -e "${BLUE}Found: $CSS_COUNT CSS, $JS_COUNT JS, $IMG_COUNT images (Total: $TOTAL_ASSETS)${NC}"
fi

CURRENT_ASSET=0

# Extract CSS URLs and download them
echo -e "${YELLOW}Downloading CSS files...${NC}"
grep -o 'href="[^"]*\.css"' "$OUTPUT_DIR/index.html" | sed 's/href="//g' | sed 's/"//g' | while read -r css_url; do
    CURRENT_ASSET=$((CURRENT_ASSET + 1))
    
    if [[ ! "$css_url" =~ ^https?:// ]]; then
        if [[ "$css_url" =~ ^/ ]]; then
            css_url="https://$BASE_URL_FROM_HTML$css_url"
        else
            # Ensure base URL ends with / before appending relative path
            if [[ "$BASE_URL_FROM_HTML" =~ /$ ]]; then
                css_url="$BASE_URL_FROM_HTML$css_url"
            else
                css_url="$BASE_URL_FROM_HTML/$css_url"
            fi
        fi
    fi
    
    filename=$(basename "$css_url")
    echo -e "  ${BLUE}→${NC} $filename"
    echo -e "    ${GRAY}Trying: $css_url${NC}"
    
    # Try to download CSS file
    if curl -s -L --fail "$css_url" -o "$OUTPUT_DIR/assets/css/$filename" 2>/dev/null; then
        echo -e "    ${GREEN}✓ Downloaded${NC}"
        # Update the HTML to reference local CSS (relative path)
        sed -i '' "s|href=\"$css_url\"|href=\"assets/css/$filename\"|g" "$OUTPUT_DIR/index.html"
    else
        echo -e "    ${YELLOW}⚠ File not found, trying /assets/ path${NC}"
        # Try alternative path with /assets/
        if [[ "$BASE_URL_FROM_HTML" =~ /$ ]]; then
            alt_css_url="https://$BASE_URL_FROM_HTML/assets/css/$filename"
        else
            alt_css_url="https://$BASE_URL_FROM_HTML/assets/css/$filename"
        fi
        echo -e "    ${GRAY}Trying: $alt_css_url${NC}"
        if curl -s -L --fail "$alt_css_url" -o "$OUTPUT_DIR/assets/css/$filename" 2>/dev/null; then
            echo -e "    ${GREEN}✓ Downloaded from /assets/ path${NC}"
            sed -i '' "s|href=\"$css_url\"|href=\"assets/css/$filename\"|g" "$OUTPUT_DIR/index.html"
        else
            echo -e "    ${YELLOW}⚠ Trying parent directory...${NC}"
            # Try removing last directory from base URL
            parent_base_url=$(echo "$BASE_URL_FROM_HTML" | sed 's|/[^/]*$||')
            parent_css_url="https://$parent_base_url/assets/css/$filename"
            echo -e "    ${GRAY}Trying: $parent_css_url${NC}"
            if curl -s -L --fail "$parent_css_url" -o "$OUTPUT_DIR/assets/css/$filename" 2>/dev/null; then
                echo -e "    ${GREEN}✓ Downloaded from parent directory${NC}"
                sed -i '' "s|href=\"$css_url\"|href=\"assets/css/$filename\"|g" "$OUTPUT_DIR/index.html"
            else
                echo -e "    ${RED}✗ Could not download $filename${NC}"
            fi
        fi
    fi
    
    progress_bar $CURRENT_ASSET $TOTAL_ASSETS
done

# Process CSS imports
echo -e "\n${YELLOW}Processing CSS imports...${NC}"
find "$OUTPUT_DIR/assets/css" -name "*.css" -type f | while read -r css_file; do
    echo -e "  ${BLUE}→${NC} Processing $(basename "$css_file")"
    
    # Extract @import URLs from CSS file
    grep -o '@import url("[^"]*")' "$css_file" | sed 's/@import url("//g' | sed 's/")//g' | while read -r import_url; do
        if [[ "$import_url" =~ ^https?:// ]]; then
            # External URL - skip for now
            echo -e "    ${GRAY}Skipping external: $import_url${NC}"
        elif [[ "$import_url" =~ ^\.*/ ]]; then
            # Relative URL - construct full URL
            filename=$(basename "$import_url")
            echo -e "    ${YELLOW}Found import: $filename${NC}"
            
            # Try to download the imported file
            if [[ "$import_url" =~ ^../css/ ]]; then
                # Already in css folder
                full_url="https://$BASE_URL_FROM_HTML/assets/css/$filename"
            elif [[ "$import_url" =~ ^../fonts/ ]]; then
                # Font file - create fonts directory
                mkdir -p "$OUTPUT_DIR/assets/fonts"
                full_url="https://$BASE_URL_FROM_HTML/assets/fonts/$filename"
            else
                # Other relative path
                full_url="https://$BASE_URL_FROM_HTML/assets/$filename"
            fi
            
            echo -e "    ${GRAY}Trying: $full_url${NC}"
            if curl -s -L --fail "$full_url" -o "$OUTPUT_DIR/assets/$filename" 2>/dev/null; then
                echo -e "    ${GREEN}✓ Downloaded import${NC}"
                # Update the CSS to reference local file
                if [[ "$filename" =~ \.css$ ]]; then
                    sed -i '' "s|@import url(\"$import_url\")|@import url(\"css/$filename\")|g" "$css_file"
                elif [[ "$filename" =~ \.css$ ]] && [[ "$import_url" =~ ^../css/ ]]; then
                    sed -i '' "s|@import url(\"$import_url\")|@import url(\"$filename\")|g" "$css_file"
                else
                    sed -i '' "s|@import url(\"$import_url\")|@import url(\"$filename\")|g" "$css_file"
                fi
            else
                echo -e "    ${RED}✗ Could not download import${NC}"
            fi
        fi
    done
done

# Extract JS URLs and download them
echo -e "\n${YELLOW}Downloading JS files...${NC}"
grep -o 'src="[^"]*\.js"' "$OUTPUT_DIR/index.html" | sed 's/src="//g' | sed 's/"//g' | while read -r js_url; do
    CURRENT_ASSET=$((CURRENT_ASSET + 1))
    
    if [[ ! "$js_url" =~ ^https?:// ]]; then
        if [[ "$js_url" =~ ^/ ]]; then
            js_url="https://$BASE_URL_FROM_HTML$js_url"
        else
            # Ensure base URL ends with / before appending relative path
            if [[ "$BASE_URL_FROM_HTML" =~ /$ ]]; then
                js_url="$BASE_URL_FROM_HTML$js_url"
            else
                js_url="$BASE_URL_FROM_HTML/$js_url"
            fi
        fi
    fi
    
    filename=$(basename "$js_url")
    echo -e "  ${BLUE}→${NC} $filename"
    
    # Try to download the JS file
    if curl -s -L --fail "$js_url" -o "$OUTPUT_DIR/assets/js/$filename" 2>/dev/null; then
        echo -e "    ${GREEN}✓ Downloaded${NC}"
        # Update the HTML to reference local JS (relative path)
        sed -i '' "s|src=\"$js_url\"|src=\"assets/js/$filename\"|g" "$OUTPUT_DIR/index.html"
    else
        echo -e "    ${YELLOW}⚠ File not found, trying /assets/ path${NC}"
        # Try alternative path with /assets/
        if [[ "$BASE_URL_FROM_HTML" =~ /$ ]]; then
            alt_js_url="https://$BASE_URL_FROM_HTML/assets/js/$filename"
        else
            alt_js_url="https://$BASE_URL_FROM_HTML/assets/js/$filename"
        fi
        if curl -s -L --fail "$alt_js_url" -o "$OUTPUT_DIR/assets/js/$filename" 2>/dev/null; then
            echo -e "    ${GREEN}✓ Downloaded from /assets/ path${NC}"
            sed -i '' "s|src=\"$js_url\"|src=\"assets/js/$filename\"|g" "$OUTPUT_DIR/index.html"
        else
            echo -e "    ${RED}✗ Could not download $filename${NC}"
        fi
    fi
    
    progress_bar $CURRENT_ASSET $TOTAL_ASSETS
done

# Extract image URLs and download them
echo -e "\n${YELLOW}Downloading images...${NC}"
grep -oE '(src|href)="[^"]*\.(jpg|jpeg|png|gif|webp|svg|ico)"' "$OUTPUT_DIR/index.html" | sed -E 's/(src|href)="//g' | sed 's/"//g' | while read -r img_url; do
    CURRENT_ASSET=$((CURRENT_ASSET + 1))
    
    if [[ ! "$img_url" =~ ^https?:// ]]; then
        if [[ "$img_url" =~ ^/ ]]; then
            img_url="https://$BASE_URL_FROM_HTML$img_url"
        else
            # Ensure base URL ends with / before appending relative path
            if [[ "$BASE_URL_FROM_HTML" =~ /$ ]]; then
                img_url="$BASE_URL_FROM_HTML$img_url"
            else
                img_url="$BASE_URL_FROM_HTML/$img_url"
            fi
        fi
    fi
    
    filename=$(basename "$img_url")
    echo -e "  ${BLUE}→${NC} $filename"
    
    # Try to download the image file
    if curl -s -L --fail "$img_url" -o "$OUTPUT_DIR/assets/images/$filename" 2>/dev/null; then
        echo -e "    ${GREEN}✓ Downloaded${NC}"
        # Update the HTML to reference local images (relative paths)
        sed -i '' "s|src=\"$img_url\"|src=\"assets/images/$filename\"|g" "$OUTPUT_DIR/index.html"
        sed -i '' "s|href=\"$img_url\"|href=\"assets/images/$filename\"|g" "$OUTPUT_DIR/index.html"
    else
        echo -e "    ${YELLOW}⚠ File not found, trying /assets/ path${NC}"
        # Try alternative path with /assets/
        if [[ "$BASE_URL_FROM_HTML" =~ /$ ]]; then
            alt_img_url="https://$BASE_URL_FROM_HTML/assets/images/$filename"
        else
            alt_img_url="https://$BASE_URL_FROM_HTML/assets/images/$filename"
        fi
        if curl -s -L --fail "$alt_img_url" -o "$OUTPUT_DIR/assets/images/$filename" 2>/dev/null; then
            echo -e "    ${GREEN}✓ Downloaded from /assets/ path${NC}"
            sed -i '' "s|src=\"$img_url\"|src=\"assets/images/$filename\"|g" "$OUTPUT_DIR/index.html"
            sed -i '' "s|href=\"$img_url\"|href=\"assets/images/$filename\"|g" "$OUTPUT_DIR/index.html"
        else
            echo -e "    ${RED}✗ Could not download $filename${NC}"
        fi
    fi
    
    progress_bar $CURRENT_ASSET $TOTAL_ASSETS
done

# Convert all remaining absolute URLs to relative paths
echo -e "\n${BLUE}[3/4]${NC} Converting URLs to relative paths..."

# Convert absolute URLs from the same domain to relative paths
DOMAIN=$(echo "$BASE_URL_FROM_HTML" | sed -e 's|^https://||' -e 's|^http://||' -e 's|/.*||')
BASE_URL="https://$DOMAIN"

# Replace absolute URLs with relative ones
sed -i '' "s|href=\"$BASE_URL/|href=\"|g" "$OUTPUT_DIR/index.html"
sed -i '' "s|src=\"$BASE_URL/|src=\"|g" "$OUTPUT_DIR/index.html"
sed -i '' "s|href=\"https://$DOMAIN/|href=\"|g" "$OUTPUT_DIR/index.html"
sed -i '' "s|src=\"https://$DOMAIN/|src=\"|g" "$OUTPUT_DIR/index.html"
sed -i '' "s|href=\"http://$DOMAIN/|href=\"|g" "$OUTPUT_DIR/index.html"
sed -i '' "s|src=\"http://$DOMAIN/|src=\"|g" "$OUTPUT_DIR/index.html"

echo -e "${BLUE}[4/4]${NC} Finalizing..."

echo -e "\n${GREEN}✓ Scraping complete!${NC}"
echo -e "${YELLOW}📁 Files saved to: $OUTPUT_DIR${NC}"
echo -e "${YELLOW}🌐 Open $OUTPUT_DIR/index.html in your browser to view the scraped site.${NC}"
