import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './infrastructure/db/data-source';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('📦 Banco de dados conectado');
    app.listen(port, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('❌ Erro ao conectar no banco de dados', error);
  });
