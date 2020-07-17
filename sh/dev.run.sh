#!/usr/bin/env bash

MONGO_CONNECTION_URL=$MONGO_CONNECTION_URL NODE_ENV=$NODE_ENV \
node node_modules/nodemon/bin/nodemon.js \
    builds/$NODE_ENV/index.js \
    --watch builds/$NODE_ENV/index.js
