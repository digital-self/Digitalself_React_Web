FROM node:14

WORKDIR /usr/src/app

#COPY ./src /usr/src/app

RUN mkdir -p /usr/src/scripts/
COPY ./build/scripts/main_start.sh /usr/src/scripts/main_start.sh
RUN chmod +x -R /usr/src/scripts/main_start.sh

#RUN chmod +x -R /usr/src/app/

RUN npm install -g nodemon

#VOLUME ./src /usr/src/app

#RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8080

ENTRYPOINT ["/usr/src/scripts/main_start.sh"]
#CMD [ "nodemon", "server.js" ]