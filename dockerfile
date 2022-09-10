FROM node:current-alpine3.16

# Installs latest Chromium (100) package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn


# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
    
USER root


WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app
CMD ["env","NODE_ENV=production"]
CMD ["pm2-runtime", "index.js"]