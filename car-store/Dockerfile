FROM node:16.3.0-alpine

# Create app directory
WORKDIR /usr/src/app

COPY --chown=node:node package.json package-lock.json* ./

# add node as admin of project + instal libs + install project + clean cache
RUN chown -R node:node . && \ 
    apk update && \
    apk add --no-cache && \
    npm install && \
    npm cache clean -f 

COPY --chown=node:node . .

#Set user
USER node

EXPOSE 3001

#Execute if on docker run no insert params
CMD ["npm","run","start"] 

#Execute if on docker run insert params
ENTRYPOINT ["npm","run","start"]
