const express = require("exress"); // Importar Express
const cowsay = require("cowsay");
const app = express(); // Crear Servidor
const port = 3000; // Puerto

app.use(express.json());

// Error 404
const error404 = require('./middlewares/error404');

//Morgan
const morgan = require("./middlewares/morgan.js")

// Configuración del logger con Morgan
app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

// Rutas Entries
const entriesRoutes = require('./routes/entries.routes');
app.use('/api/entries', entriesRoutes);

app.use(error404);

// Iniciar Servidor
app.listen(port, () => {
console.log(
    cowsay.say({
      text: `Ejercicio Entries Author -> http://localhost:${port}`
    })
  );
});

module.exports = app;