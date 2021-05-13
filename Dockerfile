FROM node:14

# Create app directory
WORKDIR /usr/src/app

COPY frontend/package.json .

RUN yarn install

COPY frontend/public ./public
COPY frontend/src ./src

EXPOSE 8080
CMD [ "node", "server.js" ]