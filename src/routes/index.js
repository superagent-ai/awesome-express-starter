const express = require('express');
const router = express.Router();

// Welcome route
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API',
    version: '1.0.0'
  });
});

// Example resource routes
router.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ]);
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id: parseInt(id), name: 'John Doe' });
});

router.post('/users', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ id: 3, name: name || 'New User' });
});

module.exports = router;
