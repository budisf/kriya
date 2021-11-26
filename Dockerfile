FROM node:16.13.0
WORKDIR /app
COPY package*.json ./app
RUN npm install
COPY --chown=node:node . .
CMD [ "npm", "start" ]
