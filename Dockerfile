# Use a newer Node.js version
FROM node:20-slim

# Create a directory for our application in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json before other files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files in the current directory into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Install 'serve' globally in the container
RUN npm install -g serve

# Serve the application
CMD ["npm", "start"]
