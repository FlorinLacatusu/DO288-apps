FROM node:slim
RUN useradd test
USER test
WORKDIR /home/test
RUN chown -R 1001:1001 "/home/test/.npm"
COPY server.js .
RUN npm install express 
CMD ["node", "server.js"]
