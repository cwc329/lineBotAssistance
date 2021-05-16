FROM node:14.0.0-buster-slim
WORKDIR /usr/src/
COPY package*.json /usr/src/
COPY . /usr/src/
RUN npm install
CMD [ "npm", "run", "dev" ]
