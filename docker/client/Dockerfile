FROM node:18.0.0-alpine3.15 AS base

WORKDIR /app

COPY ./client ./client
COPY ./proto ./proto

RUN cd client && \ 
    npm install && \
    npm run build

FROM node:18.0.0-alpine3.15

WORKDIR /app

COPY --from=base /app/client/package.json .
COPY --from=base /app/client/node_modules ./node_modules
COPY --from=base /app/client/dist ./dist
COPY --from=base /app/proto ./proto

RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

USER node

EXPOSE 3000

ENV NODE_ENV prod

CMD ["node", "dist/index.js"]