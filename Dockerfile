FROM node:19-alpine3.16

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm install && npm install astro && npm run build


CMD [ "npx", "astro", "preview", "--host", "0.0.0.0" ]
