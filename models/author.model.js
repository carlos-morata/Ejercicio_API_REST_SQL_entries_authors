const queries = require('../queries/author.queries.js') 
const pool = require('../config/db_pgsql.js')

// Leer
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllAuthors)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const getAuthorbyEmail = async (email) => {
     let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAuthorbyEmail, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally { 
        client.release();
    }
    return result
}

// Crear
const createAuthor = async (author) => {
    const { name, surname, email, image} = author;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createAuthor,[name, surname, email, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// Editar
const updateAuthor = async (author) => {
  const { name, surname, email, image, oldEmail } = author;  
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.updateAuthor, [
      name, surname, email, image, oldEmail
    ]);
    result= data.rowCount
  } catch (err) {
    console.error("Error", err);
    throw err;
  } finally {
    client.release();
  }
  return result
};

// Eliminar
const deleteAuthor = async (email) => {
  let client, result;
  try {
    client = await pool.connect();

    const data = await client.query(queries.deleteAuthor, [email]);

    result= data.rowCount;
  } catch (err) {
    console.error("Error en deleteEntry (modelo):", err);
    throw err;
  } finally {
    client.release();
  }
  return result
};


module.exports = {
    getAllAuthors,
    getAuthorbyEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor
};