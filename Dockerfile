FROM dykoffi/nodecqx:latest

# Define labels for giving more information about this image
LABEL description="test services"
LABEL maintainers="koffiedy@gmail.com"
LABEL name="serv"
LABEL vendor="CIQL Microservices"
LABEL version="1.3.0"

# Set ENV variables
ENV DATABASE_URL=

# Copy file
ADD build /App
WORKDIR /App

# install all nodejs package
RUN yarn install \
    && npx prisma generate

# Expose port for communication
EXPOSE 8888

# update database url info
CMD echo ${DATABASE_URL} > .env \
    && npx prisma migrate deploy \
    && NODE_ENV=production pm2-runtime index.js --name serv