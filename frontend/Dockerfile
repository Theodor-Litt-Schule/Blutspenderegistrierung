FROM node:22.3.0-alpine

WORKDIR /build
 
COPY ../package.json package.json
COPY ../package-lock.json package-lock.json
 
RUN npm install

COPY . .
 
CMD [ "node", "server.js" ]
