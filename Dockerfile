FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --configuration=production

FROM nginx:stable-alpine

COPY --from=build /app/dist/portafolio-2026/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 2026
CMD ["nginx", "-g", "daemon off;"]