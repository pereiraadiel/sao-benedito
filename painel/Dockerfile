# Use uma imagem base do Node.js
FROM node:20.6.1-alpine3.18 as builder

WORKDIR /app

COPY package*.json ./

RUN npm i --silent

COPY . .

RUN npm i -g @angular/cli

RUN npm run build

CMD [ "npm", "run", "prod" ]

# FROM nginx:alpine
# COPY --from=builder /app/dist/web /usr/share/nginx/html
