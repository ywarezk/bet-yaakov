FROM node:14.15.1

# /ssr - create this folder in our container
RUN mkdir ssr

# The following will be executed in the /ssr folder
WORKDIR /ssr

# copy my package json => /ssr/package.json
# copy my package-lock.json => /ssr/package-lock.json
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

RUN npm run build:ssr

EXPOSE 4000

# when we will ask docker to run the server
# docker will run it with the following command:
# npm run serve:ssr
CMD [ "npm", "run", "serve:ssr"]




