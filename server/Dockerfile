# Use uma imagem base do Node.js
FROM node:20.6.1-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm i --silent

COPY . .

RUN npm i -g @nestjs/cli

RUN npm run db:generate

RUN npm run build --prod

EXPOSE 3000

CMD ["npm", "start"]
