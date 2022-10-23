const { Schema, model } = require("mongoose");
const guatemalaSchema = Schema({
  codigo: {
    type: String,
  },
  nombreproyecto: {
    type: String,
  },
  monto: {
    type: String,
  },
  fecha: {
    type: String,
  },
});

module.exports = model("GuatemalaMd", guatemalaSchema);
