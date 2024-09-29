const express = require('express');
const Item = require('../models/itemModel');
const router = express.Router();

// Criar item (POST)
router.post('/', async (req, res) => {
  try {
    const item = new Item(req.body);
    const novoItem = await item.save();
    res.status(201).json(novoItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Listar todos os itens (GET)
router.get('/', async (req, res) => {
  try {
    const itens = await Item.find();
    res.json(itens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Listar item por ID (GET)
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item não encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Atualizar item (PUT)
router.put('/:id', async (req, res) => {
  try {
    const itemAtualizado = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!itemAtualizado) return res.status(404).json({ message: 'Item não encontrado' });
    res.json(itemAtualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Remover item (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const itemDeletado = await Item.findByIdAndDelete(req.params.id);
    if (!itemDeletado) return res.status(404).json({ message: 'Item não encontrado' });
    res.json({ message: 'Item removido com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
