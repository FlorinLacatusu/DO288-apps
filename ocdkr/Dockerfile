FROM node:slim
USER test
WORKDIR /home/test
COPY server.js .
RUN npm install express 
CMD ["node", "server.js"]
