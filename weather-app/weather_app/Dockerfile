FROM node:16.15.0

WORKDIR /usr/src/app


RUN npm init

RUN npm install express

RUN npm install -g 

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
# Copy the rest of the application files
COPY . .

# Ensure the port is exposed
EXPOSE 3000


CMD ["npm", "start"]
