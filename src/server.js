const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes'); // Certifique-se de que este caminho está correto
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

const app = express();
const port = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json()); 

// Usar rotas para os itens de compra
app.use('/itens', itemRoutes); 

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI) // Removidas as opções depreciadas
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB', error));

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});  
