# version 1.2
# re-arranged the order of commands to avoid unnecessary layers
FROM node:current-alpine3.21

WORKDIR /home/app/

COPY package.* .
# COPY package-lock.json package-lock.json
RUN npm install


COPY index.js index.js

# tells that port can be exposed...
EXPOSE 8000
#EXPOSE 8000-8009 


CMD ["npm", "start"]

##----------------------------------------------------------------------------------------#

## Version 1.1
## used alpine image where only required things are present and removed the node installation details

# FROM node:current-alpine3.21

# EXPOSE 8000

# WORKDIR /home/app/
# COPY index.js index.js
# COPY package.json package.json
# COPY package-lock.json package-lock.json

# RUN npm install
# CMD ["npm", "start"]

#-----------------------------------------------------------------------------------------#

## Version 1.0
## Image size is too big due to full fledge ubuntu os which is not required for our app

# FROM ubuntu

# RUN apt-get update
# RUN apt install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh
# RUN bash /tmp/nodesource_setup.sh
# RUN apt install -y nodejs
# EXPOSE 8000

# WORKDIR /home/app/
# COPY index.js index.js
# COPY package.json package.json
# COPY package-lock.json package-lock.json

# RUN npm install
# CMD ["npm", "start"]

