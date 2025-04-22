# MultiStage build
ARG NODE_IMAGE=node:lts-alpine3.21

FROM ${NODE_IMAGE} AS base

## Stage 1
FROM base AS builder

WORKDIR /home/build

COPY package.* .
COPY tsconfig.json .
RUN npm install
COPY src/ src/

RUN npm run build

## Stage 2
FROM base AS runner

WORKDIR /home/app
COPY --from=builder /home/build/dist /home/app/dist/
COPY --from=builder /home/build/package.* /home/app/

RUN npm install --omit=dev
EXPOSE 8000
ENV PORT=8000 
#add security vulnerabilities
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
USER nodejs
CMD ["npm", "start"]