const express = require('express');
const cors = require('cors');
const path = require("path");

// require("dotenv").config();
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
console.log('DB_USER:', process.env.DB_USER);
require("./mongo/connect-db");

const app = express();

app.set("PORT", process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

// Ruta de ejemplo
app.use('/bill', require('./routes/facturacion'));

app.use("/", (req, res) =>
  res.send("Back de la aplicacion")
);

app.listen(app.get("PORT"), () => {
  console.log(`Servidor backend corriendo en http://localhost:${app.get("PORT")}`);
});

module.exports = app;
