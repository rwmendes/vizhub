#!/bin/bash

PROJECT_DIR=$HOME/datavis-tech-2

cd $PROJECT_DIR
git stash # Save local .env
git checkout master
git pull
git stash pop # Restore local .env

git submodule sync
git submodule update --init

lerna bootstrap
cd packages/web
npm run build
pm2 restart all

# If no processes are set up in PM2, run this:
# pm2 start npm -- start