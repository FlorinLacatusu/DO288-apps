FROM node:slim
RUN useradd test
USER test
WORKDIR /home/test

COPY server.js .
RUN npm install express && chown -R 1001:1001 "/home/test/.npm" 
CMD ["node", "server.js"]
