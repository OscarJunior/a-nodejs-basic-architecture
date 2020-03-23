#!/bin/sh

export CONTAINER_COMMAND="npm start"
export CONTAINER_PORT="8080"

docker-compose up --build
