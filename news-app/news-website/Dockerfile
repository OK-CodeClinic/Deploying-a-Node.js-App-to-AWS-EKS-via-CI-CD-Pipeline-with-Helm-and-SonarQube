# Use the official Node.js image as the base image
FROM node:14

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the working directory
COPY news-app/news-website/package*.json ./

# Install the dependencies specified in the package.json file
RUN npm install

# Copy the rest of your application's source code to the working directory
COPY news-app/news-website/ .

# Expose the port your application will run on
EXPOSE 3000

# Set the command to run your application
CMD [ "npm", "start" ]
