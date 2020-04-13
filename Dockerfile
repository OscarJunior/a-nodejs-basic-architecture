FROM node:dubnium-alpine

# Set the working directory
WORKDIR /app

# Copy project specification and dependencies lock files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app sources
COPY . .

# Expose application port
EXPOSE 8080

# Debugger application port
EXPOSE 9229
