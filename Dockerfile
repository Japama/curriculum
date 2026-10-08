# Etapa 1: construcción del sitio con Vite
FROM node:22-alpine AS builder
WORKDIR /app

# Vite, TypeScript y Tailwind viven en devDependencies: hay que incluirlas
# aunque el entorno tenga NODE_ENV=production (npm omitiría `dev` por defecto).
COPY package*.json .npmrc ./
RUN npm ci --include=dev

COPY . .
RUN npm run build

# Etapa 2: servir el resultado (dist/, no build/: es la salida de Vite)
FROM node:22-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
