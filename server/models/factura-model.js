const mongoose = require("mongoose");
const { Schema } = mongoose;

const FacturaSchema = new Schema({
   name: {
    type: String,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  }
  });

module.exports = mongoose.model("factura", FacturaSchema);