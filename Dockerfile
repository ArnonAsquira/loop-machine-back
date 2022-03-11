FROM node:16

WORKDIR /usr/src/workdir
COPY . .
RUN ["npm", "i"];
EXPOSE 8080

CMD ["npm", "run", "dev"]