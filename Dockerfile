FROM node:20-alpine

WORKDIR /app

# Match your GitHub Actions workflow which runs `-p 4040:4040`
ENV PORT=4040
ENV NODE_ENV=production

# Install dependencies first for better Docker layer caching.
COPY package.json pnpm-lock.yaml ./

RUN corepack enable \
  && corepack prepare pnpm@latest --activate \
  && pnpm install --frozen-lockfile --prod

# Copy the application code (static assets + views + server).
COPY . .

EXPOSE 4040

CMD ["node", "server.js"]

