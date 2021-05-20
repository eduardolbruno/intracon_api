FROM node:8.1

WORKDIR /rest-api

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]