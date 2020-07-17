#!/usr/bin/env bash

MONGO_CONNECTION_URL=$MONGO_CONNECTION_URL NODE_ENV=$NODE_ENV \
node node_modules/pm2/bin/pm2 start builds/$NODE_ENV/index.js
