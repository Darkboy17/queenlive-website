# Stage 1: Build the app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Run build
RUN npm run build

# Stage 2: NGINX production server
FROM nginx:alpine

# Install bash and curl for healthcheck
RUN apk add --no-cache bash curl

# Copy built app
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy public folder (images, videos, favicon, etc.)
COPY --from=builder /app/public /usr/share/nginx/html/public

# Copy optimized NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# After copying files in stage 2
RUN find /usr/share/nginx/html -name "*.ico" -o -name "favicon*" | head -10

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# Expose port 80
EXPOSE 80
