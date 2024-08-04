FROM node:14

WORKDIR /usr/src/app

COPY news-app/news-website/package*.json ./

RUN npm install

COPY news-app/news-website/ .

EXPOSE 3000

CMD [ "npm", "start" ]
