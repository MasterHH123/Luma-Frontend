FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force
RUN npm ci --only=optional

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
