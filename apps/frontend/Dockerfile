# Use an official Node.js runtime as the base image
FROM node:22-alpine AS base

# Set the working directory
WORKDIR /app

# Install dependencies only when needed
FROM base AS dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Build the application
FROM base AS builder
COPY . .
RUN npm ci && npm run build

# Use a smaller image for the final stage
FROM node:22-alpine AS runner
WORKDIR /app

# Copy built application and production dependencies
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
