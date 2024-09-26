FROM node:18-alpine AS build

WORKDIR /api

COPY package*.json ./

RUN npm config set registry https://registry.npmmirror.com

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine AS production

WORKDIR /api

COPY --from=build /api/dist ./dist

COPY package*.json ./

RUN npm config set registry https://registry.npmmirror.com

RUN npm install --omit=dev

ENV NODE_ENV=production

ENV TZ=Asia/Shanghai

EXPOSE 5253

CMD ["npm", "run", "start:prod"]