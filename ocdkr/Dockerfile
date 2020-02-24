FROM node:slim
RUN useradd -D test
USER test
WORKDIR /home/test
COPY server.js .
RUN npm install express 
CMD ["node", "server.js"]
