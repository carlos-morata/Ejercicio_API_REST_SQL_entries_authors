const queries = require('../queries/entries.queries');
const pool = require('../config/db_pgsql');

// Leer
const getAllEntries = async () => {

    let client;
    let result;
    try {

        client = await pool.connect();
        const data = await client.query(queries.getAllEntries)
        result = data.rows

    } catch (err) {
        console.log(err);
    } 
    return result
}

// Crear
const createEntries = async (entrie) => {

    const { title, content, email, category } = entrie;
    let client;
    let result;

    try {
        client = await pool.connect();
        const data = await client.query(queries.createEntries,[title, content, email, category]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
    }
    return result
}

// Actualizar
const updateEntries = async(entrie) => {

    const { title, content, category, oldTitle } = entrie;  
    let client
    let result

    try {
        client = await pool.connect();
        const data = await client.query(queries.updateEntries, [ title,
            content,
            category,
            oldTitle ]);

        result= data.rowCount
    } catch (err) {
        console.error("Error", err);
    }
    return result
}

// Eliminar
const deleteEntries = async(title) => {

    let client
    let result
    try {
        client = await pool.connect();

        const data = await client.query(queries.deleteEntries, [ title ]);
        result = data.rowCount
    } catch (err) {
        console.log(err);
    }
    return result
}

module.exports = {
    getAllEntries,
    createEntries,
    updateEntries,
    deleteEntries
}