FROM node:20

EXPOSE 3000

WORKDIR /app

RUN npm i npm@latest -g

COPY package.json package-lock.json ./

RUN npm i

COPY . .

CMD ["node", "server.js"]