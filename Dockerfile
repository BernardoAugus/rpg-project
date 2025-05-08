# Usa imagem oficial do Node.js
FROM node:20-alpine

# Instala pnpm globalmente no container
RUN npm install -g pnpm

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia package.json, pnpm-lock.yaml e .npmrc (se existir)
COPY package.json pnpm-lock.yaml ./

# Instala dependências com pnpm
RUN pnpm install

# Copia o restante do código
COPY . .

# Compila o TypeScript para JS
RUN pnpm run build

# Expõe a porta que a API usará
EXPOSE 3000

# Comando padrão ao subir o container
CMD ["pnpm", "start"]
