# Use NGINX directly (no Node build)
FROM nginx:alpine

# Install bash and curl for healthcheck
RUN apk add --no-cache bash curl

# Copy prebuilt static files
COPY dist /usr/share/nginx/html
COPY public /usr/share/nginx/html/public

# Copy optimized NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

EXPOSE 80
