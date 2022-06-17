FROM node:16.14.0

WORKDIR /home/node/app

ARG environment
ARG NPM_TOKEN  


# COPY .npmrc .npmrc
RUN echo 'npmScopes:\n\
  azorakapp:\n\
    npmRegistryServer: https://npm.pkg.github.com\n\
    npmAlwaysAuth: true\n\
    npmAuthToken: '$NPM_TOKEN >> .yarnrc.yml

# RUN echo 'always-auth=true\n\
# //npm.pkg.github.com/:_authToken='${NPM_TOKEN} >> .npmrc

RUN corepack enable
RUN yarn set version stable
RUN yarn -v
RUN cat .yarnrc.yml

# COPY .yarn.yml .yarn.yml
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./
# RUN npm i npm@latest -g
COPY . .

# Expose port to Docker container
EXPOSE 8080

RUN ls -la

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
ENV NPM_TOKEN=$NPM_TOKEN
# RUN npm install --no-optional && npm cache clean --force
RUN yarn install

# RUN npm ci --only=production

# RUN npm install pm2 -g

# RUN rm -f .yarn.yml





RUN npm run build --production

# Start the app on port 8080
CMD ["node", "dist/server.js"]
