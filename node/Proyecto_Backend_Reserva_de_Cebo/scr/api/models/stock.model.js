const mongoose = require('mongoose');
const { Schema } = mongoose;
const StocksSchema = new Schema(
  {
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    cantidadTotalPedida: { type: Number, require: true },
    cantidadTotalRestante: { type: Number, require: true },
    pedidos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pedido' }],
    reservas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reserva' }],
  },

  {
    timestamps: true,
  }
);

const Stock = mongoose.model('Stock', StocksSchema);
module.exports = Stock;
