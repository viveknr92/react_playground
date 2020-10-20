FROM node:latest
WORKDIR /app
RUN npm install -g serve
COPY . .
RUN npm install
RUN npm run build
EXPOSE 5000
CMD ["serve", "-s", "build"]
