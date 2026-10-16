FROM node:18-alpine
WORKDIR /app
RUN apk add --update-cache sqlite
COPY package.json package-lock.json ./
RUN npm ci
COPY --chown=node:node . .
RUN chown -R node:node /app
USER node
CMD ["npm", "run", "dev"]
