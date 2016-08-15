FROM node:6.3.1

WORKDIR /var/www
CMD ["npm", "run", "build"]

COPY package.json /var/www

# Ruby and compass stuff
RUN apt-get update \
&& apt-get install -y \
  ruby \
  ruby-dev \
&& npm config set registry http://registry.npmjs.org/ && npm set progress=false && npm install \
&& gem update --system && gem install compass

COPY . /var/www