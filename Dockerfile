FROM node:14

# Create app directory
WORKDIR /usr/src/app

COPY frontend/package.json .

RUN yarn install

COPY frontend/public ./public
COPY frontend/src ./src

RUN yarn build

# EXPOSE 8080
CMD [ "serve", "-s build" ]