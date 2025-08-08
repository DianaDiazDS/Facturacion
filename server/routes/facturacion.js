const express = require('express');
const router = express.Router();



const {
    findAllBills,
    saveBill
} = require('../controllers/facturaControllers');
router.get('/getBills', findAllBills);
router.post('/createBills', saveBill);

router.get('/mensaje', (req, res) => {
  res.json({ mensaje: 'Hola desde el servidor Node.js!' });
});

module.exports = router;