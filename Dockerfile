FROM node:14 as build

# Create app directory
WORKDIR /usr/src/app

COPY frontend/package.json .

RUN yarn install

COPY frontend/public ./public
COPY frontend/src ./src

RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]