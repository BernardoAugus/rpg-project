FROM node:20

# Instala pnpm globalmente
RUN npm install -g pnpm

# Define diretório de trabalho
WORKDIR /app

# Copia arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instala todas as dependências (inclusive dev)
RUN pnpm install --frozen-lockfile

# Copia o restante da aplicação
COPY . .

# Expõe a porta da API
EXPOSE 3000

# Comando padrão
CMD ["pnpm", "dev"]
