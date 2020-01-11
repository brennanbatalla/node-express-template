#!/usr/bin/env bash

rm -rf ./build
cd ../linguart-ui || exit
npm run build:qa
mv ./build ../platform-api
cd ../platform-api || exit
git add .
git commit -a -m "Deploying code to Heroku"
git push heroku master