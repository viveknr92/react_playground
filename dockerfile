FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm build
RUN npm i -g serve
EXPOSE 5000
CMD ["serve", "-s", "build"]