
# RPG Backend

Backend de RPG construído com:

- Node.js + TypeScript
- Express.js
- TypeORM + PostgreSQL
- Docker + Docker Compose
- DDD (Domain-Driven Design)

## 📦 Pré-requisitos

- Docker e Docker Compose instalados
- pnpm instalado globalmente (https://pnpm.io/installation)

## 🚀 Como rodar o projeto

1️⃣ Instale as dependências:
pnpm install

2️⃣ Suba a stack Docker:
docker compose up --build

3️⃣ A API estará disponível em:
http://localhost:3001

4️⃣ O banco PostgreSQL estará disponível em:
localhost:5433

## 📚 Principais comandos

### Docker

- Subir ambiente (API + DB)
docker compose up --build

- Derrubar ambiente e remover volumes
docker compose down --volumes

- Ver containers ativos
docker ps

- Ver logs da API
docker logs rpg-api

- Acessar Postgres via container
docker exec -it rpg-db psql -U postgres -d rpg

### TypeORM

- Gerar migration automaticamente
npx typeorm migration:generate src/infrastructure/db/migrations/CreatePlayersTable

- Rodar migrations
npx typeorm migration:run

### Scripts úteis (adicione no package.json)

"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js",
  "typeorm": "typeorm-ts-node-commonjs",
  "migrate:generate": "npx typeorm migration:generate src/infrastructure/db/migrations/NewMigration",
  "migrate:run": "npx typeorm migration:run"
}

## 📂 Estrutura do projeto

src/
├── api/
├── app/
├── domain/
├── infrastructure/
│   ├── db/
│   │   ├── data-source.ts
│   │   ├── entities/
│   │   │   └── PlayerEntity.ts
│   │   ├── migrations/
│   │   └── repositories/
├── index.ts

## 📌 Observações

- As portas do Docker foram configuradas como:
  - API → localhost:3007
  - Banco → localhost:5437

- O projeto segue o padrão DDD para manter domínio, aplicação e infraestrutura desacoplados.
