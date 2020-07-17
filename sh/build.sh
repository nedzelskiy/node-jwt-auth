#!/usr/bin/env bash

node node_modules/webpack/bin/webpack.js \
    --config ./webpack.config.ts \
    --mode=$MODE \
    --watch=$WATCH
