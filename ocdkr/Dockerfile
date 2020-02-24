FROM node:slim
RUN useradd test
USER test
WORKDIR /home/test
COPY server.js .
CMD ["node", "server.js"]
