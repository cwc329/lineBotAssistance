FROM node:14.0.0-buster-slim
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
COPY . /usr/src/app
RUN npm install
CMD [ "npm run dev" ]
