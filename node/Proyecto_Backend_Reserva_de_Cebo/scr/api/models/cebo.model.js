const mongoose = require('mongoose');
const { Schema } = mongoose;
const CebosSchema = new Schema(
  {
    ceboVivo: { type: String, required: true },
    imagen: { type: String, required: true },
    precio: { type: String, required: true },
    stocks: { type: mongoose.Schema.Types.ObjectId, ref: 'Stock' },
  },
  {
    timestamps: true,
  }
);

const Cebo = mongoose.model('Stock', CebosSchema);
module.exports = Cebo;
