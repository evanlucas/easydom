#!/bin/bash

which phantomjs > /dev/null

if [[ $? != "0" ]]; then
  echo "error: phantomjs must be installed"
  exit 1
fi

which testling > /dev/null

if [[ $? != "0" ]]; then
  npm install -g testling
fi

which browserify > /dev/null

if [[ $? != "0" ]]; then
  npm install -g browserify
fi
