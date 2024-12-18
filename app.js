const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Configuración del servidor
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.get("/", (req, res) => {
    res.render("index");
});

// Inicializar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
