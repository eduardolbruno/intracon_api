FROM node:10.15.3

RUN mkdir -p /rest-api/node_modules && chown -R node:node /rest-api

WORKDIR /rest-api

COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD ["npm", "start"]