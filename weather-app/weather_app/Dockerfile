FROM node:16.15.0

WORKDIR /usr/src/app

# Copy only package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files, excluding node_modules and other unnecessary files
COPY . .

# Ensure that the app.js is in the right directory
# If your app.js is now in the 'src' directory, ensure this is reflected in CMD
EXPOSE 3000

CMD ["npm", "start"]
