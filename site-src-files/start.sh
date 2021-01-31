#!/bin/bash

chmod -R 0700 /usr/src/package_files/main-files/
chmod -R 0700 /usr/src/package_files/server-files/

cp -R /usr/src/package_files/main-files/. /usr/src/app/
cp -R /usr/src/package_files/server-files/. /usr/src/app/digitalself-server/

