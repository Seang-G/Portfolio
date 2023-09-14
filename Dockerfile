FROM node

WORKDIR /workspace
RUN npm install axios
RUN npm install http-proxy-middleware

CMD ["npm", "start"]