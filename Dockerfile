FROM node:14

# Create app directory
WORKDIR /usr/src/app

COPY frontend/package.json .

RUN pwd

RUN cd ./frontend

RUN yarn install

RUN cd..

COPY src ./src

EXPOSE 8080
CMD [ "node", "server.js" ]