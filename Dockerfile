FROM node:20-alpine

RUN apk add --no-cache libc6-compat git

WORKDIR /app

COPY . .

RUN npm ci
