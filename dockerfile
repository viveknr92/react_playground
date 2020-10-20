FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm build
RUN npm i -g serve 
CMD ["serve", "-s", "build"]
EXPOSE 5000