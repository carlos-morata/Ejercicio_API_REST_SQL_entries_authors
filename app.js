const express = require("exress"); // Importar Express
const cowsay = require("cowsay");
const app = express(); // Crear Servidor
const port = 3000; // Puerto

// Iniciar Servidor
app.listen(port, () => {
console.log(
    cowsay.say({
      text: `Ejercicio Entries Author -> http://localhost:${port}`
    })
  );
});

module.exports = app;