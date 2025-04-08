#!/bin/bash

# simple script to build and deploy to my VPS

TARGET=$1

if [[ -z "$TARGET" ]];
then
    exit 1
fi

rm -rf dist

npm install
npm run build

scp -r dist/* "root@$TARGET:/var/www/leoalvarenga.dev/"