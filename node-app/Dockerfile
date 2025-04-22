FROM ubuntu

RUN apt-get update
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt install -y nodejs
EXPOSE 8000

WORKDIR /home/app/
COPY index.js index.js
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install
CMD ["npm", "start"]

