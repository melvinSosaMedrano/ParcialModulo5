const { Schema, model } = require("mongoose");
const guatemalaSchema = Schema({
  codigo: {
    type: String,
  },
  nombreproyecto: {
    type: String,
  },
  paisqueejecuta: {
    type: String,
  },
  fechacierre: {
    type: String,
  },
});

module.exports = model("costaRicaMd", guatemalaSchema);
