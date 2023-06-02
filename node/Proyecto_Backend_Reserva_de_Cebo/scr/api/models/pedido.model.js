const mongoose = require('mongoose');
const { Schema } = mongoose;
const PedidosSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    ceboVivo: { type: String, required: true },
    fecha: { type: Date, required: true },
    cantidad: { type: Number, require: true },
    estado: {
      type: String,
      enum: ['pendiente', 'cancelado', 'confirmado'],
      default: 'pendiente',
    },
    stocks: { type: mongoose.Schema.Types.ObjectId, ref: 'Stock' },
  },

  {
    timestamps: true,
  }
);

const Pedido = mongoose.model('Pedido', PedidosSchema);
module.exports = Pedido;
