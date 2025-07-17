FROM docker.io/node:lts-alpine AS runner

RUN apk add --no-cache dumb-init curl

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /usr/src/app

# Install dotenvx
RUN curl -sfS https://dotenvx.sh/install.sh | sh

COPY apps/tanstack-start/.output ./
COPY apps/tanstack-start/.env ./

RUN chown -R node:node .
USER node
EXPOSE 3000

# COPY --chown=node:node ./tools/scripts/entrypoints/api.sh /usr/local/bin/docker-entrypoint.sh
# ENTRYPOINT [ "docker-entrypoint.sh" ]

CMD ["dumb-init", "dotenvx", "run", "--", "node", "server/index.mjs"]
