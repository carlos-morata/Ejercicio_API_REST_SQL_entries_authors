const entriesModel = require('../models/entries.model');

// GET http://localhost:3000/entries
const getEntries = async (req, res) => {

    let entries

    if(req.query.email) {
        entries = await entriesModel.getEntriesByEmail(req.query.email);
    } else {
        entries = await entriesModel.getAllEntries();
    }

    res.status(200).json(entries);
}

// GET http://localhost:3000/entries?email=correo@gmail.com
const getEntriesByEmail = async (req, res) => {

    let entries
    const { email } = req.query;

    if(email) {
        entries = await entriesModel.getEntriesByEmail(email);
    } else {
        entries = await entriesModel.getAllEntries();
    }

    res.status(200).json(entries);
}

// POST http://localhost:3000/api/entries
const createEntries = async (req, res) => {

    const newEntrie = req.body;
    const res = await entriesModel.createEntries(newEntrie)
    
    res.status(201).json({
        data: newEntrie
    });
}

// PUT http://localhost:3000/api/entries
const updateEntries = async (req, res) => {

    const {title, content, category, oldTitle} = req.body; 
    const result = await entry.updateEntries({title, content, category, oldTitle});

    if (result > 0) {
    res.status(200).json({message: "Entrada actualizada!"});
    } else {
        return res.status(404).json({ message: "Entrada no encontrada con ese título" });
    }
}

// DELETE http://localhost:3000/api/entries/title
const deleteEntries = async(req, res) => {

    const title= req.params.title; 
    const deletedRows = await entry.deleteEntry(title);
    
    if (deletedRows > 0) {
      res.status(200).json({ message: "Entrada elimanada!" });
    } else {
      res.status(404).json({ message: "No se ha encontrado ninguna entrada con ese título" });
    }
}

module.exports = {
    getEntries,
    getEntriesByEmail,
    createEntries,
    updateEntries,
    deleteEntries
}