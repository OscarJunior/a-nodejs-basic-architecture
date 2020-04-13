#!/bin/sh

export CONTAINER_COMMAND="npm run start:dev"
export CONTAINER_PORT="8080"

npm i
docker-compose up --build
