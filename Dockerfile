FROM node:16.13.0
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY .env ./
COPY .sequelizerc ./
RUN npm install


CMD [ "npm", "start" ]