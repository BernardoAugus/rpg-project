FROM node:20

# Instala pnpm globalmente
RUN npm install -g pnpm

# Define diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos necessários para instalar dependências
COPY pnpm-lock.yaml ./
COPY package.json ./

# Instala dependências do projeto
RUN pnpm install

# Copia o restante do código-fonte
COPY . .

# Expõe a porta interna usada pela aplicação
EXPOSE 3000

# Comando padrão (roda o script "dev" do package.json)
CMD ["pnpm", "dev"]
