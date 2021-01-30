#!/bin/bash

chmod +x -R /usr/src/app/
chmod 0777 -R /usr/src/app/

#nodemon server.js
npm run startup
