FROM node:20-alpine

WORKDIR /app

# Install production dependencies first for better layer caching.
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source.
COPY src ./src

ENV NODE_ENV=production
ENV MONGO_URL="mongodb+srv://kislaykkwork_db_user:Googlechrome1@cluster0.p0fqmdh.mongodb.net/"
EXPOSE 5000

USER node
CMD ["npm", "start"]
