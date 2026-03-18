# Use Node.js 20 LTS as base image (required for Vite 7.3.1)
FROM node:20-alpine

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Expose port 4040
EXPOSE 4040

# Start the application with vite preview
CMD ["pnpm", "preview", "--host", "0.0.0.0", "--port", "4040"]
