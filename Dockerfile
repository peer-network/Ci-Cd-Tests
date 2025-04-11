FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
WORKDIR /app
COPY . .

EXPOSE 80
CMD ["npm", "start"]