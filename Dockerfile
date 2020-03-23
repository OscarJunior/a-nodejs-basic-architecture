##################################
### BASE
FROM node:dubnium-alpine AS base

# Set the working directory
WORKDIR /app

# Copy project specification and dependencies lock files
COPY package*.json /tmp/

### DEPENDENCIES
FROM base AS dependencies

# Install Node.js dependencies
RUN cd /tmp && npm install

##################################
### RELEASE
FROM base AS development

COPY .eslintrc.json ./
COPY .gitignore ./
COPY .prettierrc ./

# Copy app sources
COPY . .

# Copy dependencies
COPY --from=dependencies /tmp/node_modules ./node_modules

# Expose application port
EXPOSE 8080

# Debugger application port
EXPOSE 9229
