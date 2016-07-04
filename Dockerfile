FROM node:5.11
MAINTAINER <Marc Bramaud marc.bramaud@goeuro.com>

RUN npm install -g webpack webpack-dev-server karma phantomjs

WORKDIR /tmp
COPY ./package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN cp -a /tmp/node_modules /usr/src/app/

ENV NODE_ENV=production
ENV PORT=4000

CMD ["/usr/local/bin/node", "./index.js"]
EXPOSE 4000
