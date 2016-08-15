#!/bin/bash
cp ./deploy/docker-compose.yml ./docker-compose.yml
docker-compose stop && docker-compose rm -f
docker-compose build
docker-compose up