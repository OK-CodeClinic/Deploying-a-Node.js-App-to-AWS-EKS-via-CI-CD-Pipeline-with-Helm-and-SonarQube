FROM node:16.15.0

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g npm-check-updates \
    && ncu -u \
    && npm install

# Copy the rest of the application files
COPY . .

# Ensure the port is exposed
EXPOSE 3000


CMD ["npm", "start"]
