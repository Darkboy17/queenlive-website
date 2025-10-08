# -----------------------------------------------------------
# Stage 1️⃣: Build the app (conditionally)
# -----------------------------------------------------------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all source files
COPY . .

# -----------------------------------------------------------
# Conditionally run build based on PUBLIC_CHANGED build arg
# -----------------------------------------------------------
ARG PUBLIC_CHANGED=true
RUN if [ "$PUBLIC_CHANGED" = "true" ]; then \
      echo "🛠️ Running npm run build because public/ changed"; \
      npm run build; \
    else \
      echo "⏭️ Skipping npm run build (no public/ changes)"; \
      mkdir -p dist; \
    fi

# -----------------------------------------------------------
# Stage 2️⃣: NGINX production server
# -----------------------------------------------------------
FROM nginx:alpine

# Install bash and curl for healthcheck
RUN apk add --no-cache bash curl

# Copy built app
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy public folder (images, videos, favicon, etc.)
COPY --from=builder /app/public /usr/share/nginx/html/public

# Copy optimized NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Optional: Verify key assets copied
RUN find /usr/share/nginx/html -name "*.ico" -o -name "favicon*" | head -10

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# Expose port
EXPOSE 80