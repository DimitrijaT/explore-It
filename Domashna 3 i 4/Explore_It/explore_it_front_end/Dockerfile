FROM node:14.13.1-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.19.1-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
EXPOSE 443

RUN apk add python3 python3-dev py3-pip build-base libressl-dev musl-dev libffi-dev rust cargo vim 

RUN pip3 install pip --upgrade
RUN pip3 install certbot-nginx
RUN mkdir /etc/letsencrypt/live/exploreit-mk.online

COPY ./cert/fullchain.pem /etc/letsencrypt/live/exploreit-mk.online/fullchain.pem
COPY ./cert/privkey.pem /etc/letsencrypt/live/exploreit-mk.online/privkey.pem

COPY default.conf /etc/nginx/conf.d/default.conf


CMD ["nginx", "-g", "daemon off;"]

