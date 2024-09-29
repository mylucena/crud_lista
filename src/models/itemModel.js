const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  nome: { type: String, required: true }, // Nome do item
  quantidade: { type: Number, required: true }, // Quantidade do item
  comprado: { type: Boolean, default: false }, // Status de comprado
  dataDeCriacao: { type: Date, default: Date.now } // Data de criação
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
