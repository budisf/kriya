FROM node:16.13.0
WORKDIR /
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY .env ./
COPY .sequelizerc ./
RUN npm install
RUN npm run build
RUN npm run dev

CMD [ "npm", "start" ]