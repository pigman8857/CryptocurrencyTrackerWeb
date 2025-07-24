# How to set up react + vite + docker is here 
# https://thedkpatel.medium.com/dockerizing-react-application-built-with-vite-a-simple-guide-4c41eb09defa

# Use Node.js 22 on Alpine Linux for a lightweight dev container
FROM node:22-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Then we install serve. It helps you serve a static site, single page application or just a static file.
RUN npm i -g serve

# Copy all source code
COPY . .

RUN npm run build

# Expose Vite's default dev server port
EXPOSE 3000

# The last command serve -s dist runs only when the container spins up. It is not part of the Image creation process.
CMD [ "serve", "-s", "dist" ]

