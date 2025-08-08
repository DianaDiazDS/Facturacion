const Bill = require("../models/factura-model");
const mongoose = require("mongoose");

exports.findAllBills = async (req, res) => {

  try {
   
    const bills = await Bill.find({})
    console.log(bills)
    if (bills.length === 0) {
      return res.status(404).json({ success: false, message: "No se encontraron facturas para este usuario" });
    }

    res.status(200).json({ success: true, data: bills });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

    exports.saveBill = async (req, res) => {
        try {
            const { name, cantidad } = req.body;

            if (!name || !cantidad) {
                return res.status(400).json({ success: false, error: "Faltan datos requeridos: name o cantidad" });
            }

            const newBill = new Bill({
                name,
                cantidad
            });

            await newBill.save();

            return res.status(201).json({ success: true, data: newBill });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: error.message });
        }
    };
