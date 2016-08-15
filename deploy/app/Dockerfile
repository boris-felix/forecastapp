FROM node:5.6.0-onbuild

WORKDIR /var/www
ADD . /var/www

# Ruby and compass stuff
RUN apt-get update \
&& apt-get install -y \
  ruby \
  ruby-dev \
&& npm install \
&& gem update --system && gem install compass