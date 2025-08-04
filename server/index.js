const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Ruta de ejemplo
app.get('/api/mensaje', (req, res) => {
  res.json({ mensaje: 'Hola desde el servidor Node.js!' });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
