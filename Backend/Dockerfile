FROM node:20-alpine

WORKDIR /app

# Install production dependencies first for better layer caching.
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source.
COPY src ./src

ENV NODE_ENV=production
ENV MONGO_URL="process.env.MONGO_URL"
EXPOSE 5000

USER node
CMD ["npm", "start"]
