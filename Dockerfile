# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the server code to the working directory
COPY server.js .

# Expose the port that the app will listen on
EXPOSE 3000

# Run the app when the container starts
CMD ["node", "server.js"]