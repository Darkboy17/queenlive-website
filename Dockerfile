# Stage 1: Base for dependencies (optional)
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Stage 2: NGINX production server
FROM nginx:alpine
RUN apk add --no-cache bash curl

# Copy build artifacts that were created in CI
COPY dist /usr/share/nginx/html
COPY public /usr/share/nginx/html/public
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Healthcheck & expose
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1
EXPOSE 80