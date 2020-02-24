FROM node:slim
RUN adduser -D worker
USER test
WORKDIR /home/test
COPY server.js .
RUN npm install express 
CMD ["node", "server.js"]
