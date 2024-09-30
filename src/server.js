const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes'); 
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json()); 

// Usar rotas para os itens de compra
app.use('/itens', itemRoutes); 

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI) 
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB', error));

  
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});  
