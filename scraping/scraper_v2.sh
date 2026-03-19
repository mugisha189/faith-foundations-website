#!/bin/bash

# Website Scraper Script v2 - Assets Folder Download
# Usage: ./scraper_v2.sh "https://example.com"

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
    
    printf "\rProgress: ["
    printf "%*s" $filled | tr ' ' '█'
    printf "%*s" $empty | tr ' ' '░'
    printf "] %d%%" $percentage
}

# Check if URL is provided
if [ $# -eq 0 ]; then
    echo -e "${RED}Error: No URL provided${NC}"
    echo -e "${YELLOW}Usage: ./scraper_v2.sh \"https://example.com/page\"${NC}"
    exit 1
fi

URL="$1"

# Extract path name from URL for folder naming
PATH_NAME=$(echo "$URL" | sed 's|.*/||' | sed 's/\.[^.]*$//' || echo "page")
FOLDER_NAME="${PATH_NAME}_$(date +%Y%m%d_%H%M%S)_v2"
BASE_DIR="$(dirname "$0")"

echo -e "${YELLOW}Scraping: $URL${NC}"
echo -e "${YELLOW}Path name: $PATH_NAME${NC}"
echo -e "${YELLOW}Output folder: $FOLDER_NAME${NC}"

# Create output directory
OUTPUT_DIR="$BASE_DIR/$FOLDER_NAME"
mkdir -p "$OUTPUT_DIR"

# Download the main HTML
echo -e "\n${BLUE}[1/3]${NC} Downloading HTML..."
curl -s -L "$URL" -o "$OUTPUT_DIR/index.html"
progress_bar 1 1
echo -e "\n${GREEN}✓ HTML downloaded${NC}"

# Extract base URL from the HTML file
echo -e "\n${BLUE}Extracting base URL from HTML...${NC}"
# Look for the base URL in the HTML file
BASE_URL_FROM_HTML=$(grep -o 'href="[^"]*/assets/[^"]*"' "$OUTPUT_DIR/index.html" | head -1 | sed 's/href="//g' | sed 's/"//g' | sed 's|/assets/.*||')
if [ -z "$BASE_URL_FROM_HTML" ]; then
    # Fallback to original URL if no base found
    BASE_URL_FROM_HTML=$(echo "$URL" | sed 's|/[^/]*$||')
fi
echo -e "${GREEN}Base URL detected: $BASE_URL_FROM_HTML${NC}"

# Download entire assets folder
echo -e "\n${BLUE}[2/3]${NC} Downloading assets folder..."
ASSETS_URL="$BASE_URL_FROM_HTML/assets"

# Check if assets folder exists
if curl -s -L --fail "$ASSETS_URL" >/dev/null 2>&1; then
    echo -e "${GREEN}✓ Assets folder found at: $ASSETS_URL${NC}"
    
    # Create a temporary directory for downloading
    TEMP_DIR=$(mktemp -d)
    
    # Download the entire assets folder using wget with recursive download
    echo -e "${YELLOW}Downloading entire assets folder...${NC}"
    
    if command -v wget >/dev/null 2>&1; then
        # Use wget for better recursive download
        wget -q --recursive --level=2 --no-parent --convert-links --adjust-extension \
             --directory-prefix="$TEMP_DIR" \
             --base="$ASSETS_URL" \
             "$ASSETS_URL" 2>/dev/null || {
            echo -e "${YELLOW}⚠ wget failed, using curl directory parsing${NC}"
            # Inline directory parsing logic
            echo -e "${YELLOW}Parsing assets directory structure...${NC}"
            
            # Get the directory listing HTML
            dir_html=$(curl -s -L "$ASSETS_URL")
            
            # Extract subdirectories from the main assets directory
            echo "$dir_html" | grep -oE 'href="[^"]*/"' | sed 's/href="//g' | sed 's/"//g' | while read -r subdir; do
                # Skip parent directory and non-directory links, and extract just the last directory name
                if [[ "$subdir" != "/" && "$subdir" != "../" && "$subdir" =~ /$ && ! "$subdir" =~ ^http ]]; then
                    # Extract just the last directory name from the full path
                    subdir_name=$(echo "$subdir" | sed 's|/$||' | sed 's|.*/||')
                    echo -e "  ${BLUE}→${NC} Found directory: $subdir_name"
                    
                    # Create the subdirectory in temp folder
                    mkdir -p "$TEMP_DIR/assets/$subdir_name"
                    
                    # Inline recursive processing for this subdirectory
                    (
                        current_url="$ASSETS_URL/$subdir_name"
                        current_path="$subdir_name"
                        
                        # Recursive processing loop
                        while true; do
                            echo -e "    ${BLUE}→${NC} Scanning: $current_path"
                            
                            # Get the directory listing HTML
                            dir_html=$(curl -s -L "$current_url")
                            
                            # First, extract and download all files in current directory
                            echo "$dir_html" | grep -oE 'href="[^"]*\.[^/"]+"' | sed 's/href="//g' | sed 's/"//g' | while read -r file; do
                                # Skip directories and navigation links
                                if [[ "$file" != "./" && "$file" != "../" && "$file" != "/" && ! "$file" =~ /$ && "$file" =~ \. ]]; then
                                    # Extract just the filename from the full path
                                    filename=$(echo "$file" | sed 's|.*/||')
                                    echo -e "      ${GRAY}Downloading: $filename${NC}"
                                    curl -s -L "$current_url/$filename" -o "$TEMP_DIR/assets/$current_path/$filename" 2>/dev/null || echo -e "      ${RED}✗ Failed to download $filename${NC}"
                                fi
                            done
                            
                            # Check if there are subdirectories to process
                            found_subdir=false
                            echo "$dir_html" | grep -oE 'href="[^"]*/"' | sed 's/href="//g' | sed 's/"//g' | while read -r subsubdir; do
                                # Skip parent directory and navigation links
                                if [[ "$subsubdir" != "/" && "$subsubdir" != "../" && "$subsubdir" =~ /$ && ! "$subsubdir" =~ ^http ]]; then
                                    # Extract just the directory name from the full path
                                    subsubdir_name=$(echo "$subsubdir" | sed 's|/$||' | sed 's|.*/||')
                                    
                                    # Create the subdirectory in temp folder
                                    mkdir -p "$TEMP_DIR/assets/$current_path/$subsubdir_name"
                                    
                                    echo -e "      ${BLUE}→${NC} Found subdirectory: $subsubdir_name"
                                    
                                    # Download files in this subdirectory
                                    subsubdir_url="$current_url/$subsubdir_name"
                                    subsubdir_html=$(curl -s -L "$subsubdir_url")
                                    
                                    # Download files in this subdirectory
                                    echo "$subsubdir_html" | grep -oE 'href="[^"]*\.[^/"]+"' | sed 's/href="//g' | sed 's/"//g' | while read -r file; do
                                        if [[ "$file" != "./" && "$file" != "../" && "$file" != "/" && ! "$file" =~ /$ && "$file" =~ \. ]]; then
                                            filename=$(echo "$file" | sed 's|.*/||')
                                            echo -e "        ${GRAY}Downloading: $filename${NC}"
                                            curl -s -L "$subsubdir_url/$filename" -o "$TEMP_DIR/assets/$current_path/$subsubdir_name/$filename" 2>/dev/null || echo -e "        ${RED}✗ Failed to download $filename${NC}"
                                        fi
                                    done
                                    
                                    # Check for deeper subdirectories
                                    echo "$subsubdir_html" | grep -oE 'href="[^"]*/"' | sed 's/href="//g' | sed 's/"//g' | while read -r deepdir; do
                                        if [[ "$deepdir" != "/" && "$deepdir" != "../" && "$deepdir" =~ /$ && ! "$deepdir" =~ ^http ]]; then
                                            deepdir_name=$(echo "$deepdir" | sed 's|/$||' | sed 's|.*/||')
                                            echo -e "        ${BLUE}→${NC} Found deeper subdirectory: $deepdir_name"
                                            mkdir -p "$TEMP_DIR/assets/$current_path/$subsubdir_name/$deepdir_name"
                                            
                                            deepdir_url="$subsubdir_url/$deepdir_name"
                                            deepdir_html=$(curl -s -L "$deepdir_url")
                                            
                                            echo "$deepdir_html" | grep -oE 'href="[^"]*\.[^/"]+"' | sed 's/href="//g' | sed 's/"//g' | while read -r file; do
                                                if [[ "$file" != "./" && "$file" != "../" && "$file" != "/" && ! "$file" =~ /$ && "$file" =~ \. ]]; then
                                                    filename=$(echo "$file" | sed 's|.*/||')
                                                    echo -e "          ${GRAY}Downloading: $filename${NC}"
                                                    curl -s -L "$deepdir_url/$filename" -o "$TEMP_DIR/assets/$current_path/$subsubdir_name/$deepdir_name/$filename" 2>/dev/null || echo -e "          ${RED}✗ Failed to download $filename${NC}"
                                                fi
                                            done
                                        fi
                                    done
                                fi
                            done
                            
                            # Break the loop after processing current level (simplified recursion)
                            break
                        done
                    )
                fi
            done
        }
    else
        # Use curl method directly
        echo -e "${YELLOW}wget not available, using curl directory parsing${NC}"
        # Inline directory parsing logic
        echo -e "${YELLOW}Parsing assets directory structure...${NC}"
        
        # Get the directory listing HTML
        dir_html=$(curl -s -L "$ASSETS_URL")
        
        # Extract subdirectories from the main assets directory
        echo "$dir_html" | grep -oE 'href="[^"]*/"' | sed 's/href="//g' | sed 's/"//g' | while read -r subdir; do
            # Skip parent directory and non-directory links, and extract just the last directory name
            if [[ "$subdir" != "/" && "$subdir" != "../" && "$subdir" =~ /$ && ! "$subdir" =~ ^http ]]; then
                # Extract just the last directory name from the full path
                subdir_name=$(echo "$subdir" | sed 's|/$||' | sed 's|.*/||')
                echo -e "  ${BLUE}→${NC} Found directory: $subdir_name"
                
                # Create the subdirectory in temp folder
                mkdir -p "$TEMP_DIR/assets/$subdir_name"
                
                # Inline recursive processing for this subdirectory
                (
                    current_url="$ASSETS_URL/$subdir_name"
                    current_path="$subdir_name"
                    
                    # Recursive processing loop
                    while true; do
                        echo -e "    ${BLUE}→${NC} Scanning: $current_path"
                        
                        # Get the directory listing HTML
                        dir_html=$(curl -s -L "$current_url")
                        
                        # First, extract and download all files in current directory
                        echo "$dir_html" | grep -oE 'href="[^"]*\.[^/"]+"' | sed 's/href="//g' | sed 's/"//g' | while read -r file; do
                            # Skip directories and navigation links
                            if [[ "$file" != "./" && "$file" != "../" && "$file" != "/" && ! "$file" =~ /$ && "$file" =~ \. ]]; then
                                # Extract just the filename from the full path
                                filename=$(echo "$file" | sed 's|.*/||')
                                echo -e "      ${GRAY}Downloading: $filename${NC}"
                                curl -s -L "$current_url/$filename" -o "$TEMP_DIR/assets/$current_path/$filename" 2>/dev/null || echo -e "      ${RED}✗ Failed to download $filename${NC}"
                            fi
                        done
                        
                        # Check if there are subdirectories to process
                        found_subdir=false
                        echo "$dir_html" | grep -oE 'href="[^"]*/"' | sed 's/href="//g' | sed 's/"//g' | while read -r subsubdir; do
                            # Skip parent directory and navigation links
                            if [[ "$subsubdir" != "/" && "$subsubdir" != "../" && "$subsubdir" =~ /$ && ! "$subsubdir" =~ ^http ]]; then
                                # Extract just the directory name from the full path
                                subsubdir_name=$(echo "$subsubdir" | sed 's|/$||' | sed 's|.*/||')
                                
                                # Create the subdirectory in temp folder
                                mkdir -p "$TEMP_DIR/assets/$current_path/$subsubdir_name"
                                
                                echo -e "      ${BLUE}→${NC} Found subdirectory: $subsubdir_name"
                                
                                # Download files in this subdirectory
                                subsubdir_url="$current_url/$subsubdir_name"
                                subsubdir_html=$(curl -s -L "$subsubdir_url")
                                
                                # Download files in this subdirectory
                                echo "$subsubdir_html" | grep -oE 'href="[^"]*\.[^/"]+"' | sed 's/href="//g' | sed 's/"//g' | while read -r file; do
                                    if [[ "$file" != "./" && "$file" != "../" && "$file" != "/" && ! "$file" =~ /$ && "$file" =~ \. ]]; then
                                        filename=$(echo "$file" | sed 's|.*/||')
                                        echo -e "        ${GRAY}Downloading: $filename${NC}"
                                        curl -s -L "$subsubdir_url/$filename" -o "$TEMP_DIR/assets/$current_path/$subsubdir_name/$filename" 2>/dev/null || echo -e "        ${RED}✗ Failed to download $filename${NC}"
                                    fi
                                done
                                
                                # Check for deeper subdirectories
                                echo "$subsubdir_html" | grep -oE 'href="[^"]*/"' | sed 's/href="//g' | sed 's/"//g' | while read -r deepdir; do
                                    if [[ "$deepdir" != "/" && "$deepdir" != "../" && "$deepdir" =~ /$ && ! "$deepdir" =~ ^http ]]; then
                                        deepdir_name=$(echo "$deepdir" | sed 's|/$||' | sed 's|.*/||')
                                        echo -e "        ${BLUE}→${NC} Found deeper subdirectory: $deepdir_name"
                                        mkdir -p "$TEMP_DIR/assets/$current_path/$subsubdir_name/$deepdir_name"
                                        
                                        deepdir_url="$subsubdir_url/$deepdir_name"
                                        deepdir_html=$(curl -s -L "$deepdir_url")
                                        
                                        echo "$deepdir_html" | grep -oE 'href="[^"]*\.[^/"]+"' | sed 's/href="//g' | sed 's/"//g' | while read -r file; do
                                            if [[ "$file" != "./" && "$file" != "../" && "$file" != "/" && ! "$file" =~ /$ && "$file" =~ \. ]]; then
                                                filename=$(echo "$file" | sed 's|.*/||')
                                                echo -e "          ${GRAY}Downloading: $filename${NC}"
                                                curl -s -L "$deepdir_url/$filename" -o "$TEMP_DIR/assets/$current_path/$subsubdir_name/$deepdir_name/$filename" 2>/dev/null || echo -e "          ${RED}✗ Failed to download $filename${NC}"
                                            fi
                                        done
                                    fi
                                done
                            fi
                        done
                        
                        # Break the loop after processing current level (simplified recursion)
                        break
                    done
                )
            fi
        done
    fi
    
    # Move downloaded assets to output directory
    if [ -d "$TEMP_DIR/assets" ]; then
        mv "$TEMP_DIR/assets" "$OUTPUT_DIR/"
        echo -e "${GREEN}✓ Assets folder downloaded successfully${NC}"
    else
        echo -e "${RED}✗ No assets folder downloaded${NC}"
        # Try to find any downloaded content
        find "$TEMP_DIR" -name "*.css" -o -name "*.js" -o -name "*.jpg" -o -name "*.png" -o -name "*.gif" 2>/dev/null | head -5 | while read -r file; do
            echo -e "${YELLOW}Found file: $(basename "$file")${NC}"
        done
    fi
    
    # Clean up temp directory
    rm -rf "$TEMP_DIR"
else
    echo -e "${RED}✗ Assets folder not found at: $ASSETS_URL${NC}"
    echo -e "${YELLOW}Trying individual asset downloads...${NC}"
    # Define the function inline since it's not being found
    download_individual_assets_inline
fi

# Update HTML to use relative paths
echo -e "\n${BLUE}[3/3]${NC} Converting URLs to relative paths..."

# Convert all asset URLs to relative paths
sed -i '' 's|href="[^"]*/assets/|href="assets/|g' "$OUTPUT_DIR/index.html"
sed -i '' 's|src="[^"]*/assets/|src="assets/|g' "$OUTPUT_DIR/index.html"

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

echo -e "\n${GREEN}✓ URL conversion complete${NC}"

echo -e "\n${GREEN}✓ Scraping complete!${NC}"
echo -e "${YELLOW}📁 Files saved to: $(realpath "$OUTPUT_DIR")${NC}"
echo -e "${YELLOW}🌐 Open $(realpath "$OUTPUT_DIR")/index.html in your browser to view the scraped site.${NC}"

# Recursive function to download directories and their contents
process_directory_recursive() {
    local current_url="$1"
    local current_path="$2"
    
    echo -e "    ${BLUE}→${NC} Scanning: $current_path"
    
    # Get the directory listing HTML
    dir_html=$(curl -s -L "$current_url")
    
    # First, extract and download all files in current directory
    echo "$dir_html" | grep -oE 'href="[^"]*\.[^/"]+"' | sed 's/href="//g' | sed 's/"//g' | while read -r file; do
        # Skip directories and navigation links
        if [[ "$file" != "./" && "$file" != "../" && "$file" != "/" && ! "$file" =~ /$ && "$file" =~ \. ]]; then
            # Extract just the filename from the full path
            filename=$(echo "$file" | sed 's|.*/||')
            echo -e "      ${GRAY}Downloading: $filename${NC}"
            curl -s -L "$current_url/$filename" -o "$TEMP_DIR/assets/$current_path/$filename" 2>/dev/null || echo -e "      ${RED}✗ Failed to download $filename${NC}"
        fi
    done
    
    # Then, extract subdirectories and recurse into them
    echo "$dir_html" | grep -oE 'href="[^"]*/"' | sed 's/href="//g' | sed 's/"//g' | while read -r subdir; do
        # Skip parent directory and navigation links
        if [[ "$subdir" != "/" && "$subdir" != "../" && "$subdir" =~ /$ && ! "$subdir" =~ ^http ]]; then
            # Extract just the directory name from the full path
            subdir_name=$(echo "$subdir" | sed 's|/$||' | sed 's|.*/||')
            
            # Create the subdirectory in temp folder
            mkdir -p "$TEMP_DIR/assets/$current_path/$subdir_name"
            
            # Recursively call this function for the subdirectory
            process_directory_recursive "$current_url/$subdir_name" "$current_path/$subdir_name"
        fi
    done
}

# Inline function for individual asset downloads
download_individual_assets_inline() {
    echo -e "${YELLOW}Falling back to individual asset downloads...${NC}"
    
    # Extract and download CSS files
    grep -o 'href="[^"]*\.css"' "$OUTPUT_DIR/index.html" | sed 's/href="//g' | sed 's/"//g' | while read -r css_url; do
        if [[ ! "$css_url" =~ ^https?:// ]]; then
            if [[ "$css_url" =~ ^/ ]]; then
                full_url="https://$BASE_URL_FROM_HTML$css_url"
            else
                full_url="$BASE_URL_FROM_HTML/$css_url"
            fi
        else
            full_url="$css_url"
        fi
        
        filename=$(basename "$css_url")
        mkdir -p "$OUTPUT_DIR/assets/css"
        echo -e "  ${BLUE}→${NC} $filename"
        curl -s -L "$full_url" -o "$OUTPUT_DIR/assets/css/$filename" 2>/dev/null || true
    done
    
    # Extract and download JS files
    grep -o 'src="[^"]*\.js"' "$OUTPUT_DIR/index.html" | sed 's/src="//g' | sed 's/"//g' | while read -r js_url; do
        if [[ ! "$js_url" =~ ^https?:// ]]; then
            if [[ "$js_url" =~ ^/ ]]; then
                full_url="https://$BASE_URL_FROM_HTML$js_url"
            else
                full_url="$BASE_URL_FROM_HTML/$js_url"
            fi
        else
            full_url="$js_url"
        fi
        
        filename=$(basename "$js_url")
        mkdir -p "$OUTPUT_DIR/assets/js"
        echo -e "  ${BLUE}→${NC} $filename"
        curl -s -L "$full_url" -o "$OUTPUT_DIR/assets/js/$filename" 2>/dev/null || true
    done
    
    # Extract and download images
    grep -oE '(src|href)="[^"]*\.(jpg|jpeg|png|gif|webp|svg|ico)"' "$OUTPUT_DIR/index.html" | sed -E 's/(src|href)="//g' | sed 's/"//g' | while read -r img_url; do
        if [[ ! "$img_url" =~ ^https?:// ]]; then
            if [[ "$img_url" =~ ^/ ]]; then
                full_url="https://$BASE_URL_FROM_HTML$img_url"
            else
                full_url="$BASE_URL_FROM_HTML/$img_url"
            fi
        else
            full_url="$img_url"
        fi
        
        filename=$(basename "$img_url")
        mkdir -p "$OUTPUT_DIR/assets/images"
        echo -e "  ${BLUE}→${NC} $filename"
        curl -s -L "$full_url" -o "$OUTPUT_DIR/assets/images/$filename" 2>/dev/null || true
    done
}
