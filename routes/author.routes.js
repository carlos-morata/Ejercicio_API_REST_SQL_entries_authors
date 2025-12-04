const express = require('express');

// Rutas
const authorsController = require('../controllers/author.controller');
const router = express.Router();

// GET http://localhost:3000/api/authors
router.get('/', authorsController.getAllAuthors);

// GET http://localhost:3000/api/authors?email=correo@gmail.com
router.get('/', authorsController.getAuthorbyEmail);

// POST http://localhost:3000/api/authors
router.post('/', authorsController.createAuthor);

// PUT http://localhost:3000/api/authors
router.put('/', authorsController.updateAuthor);

// DELETE http://localhost:3000/api/authors/email
router.delete('/:email', authorsController.deleteAuthor);

module.exports = router;