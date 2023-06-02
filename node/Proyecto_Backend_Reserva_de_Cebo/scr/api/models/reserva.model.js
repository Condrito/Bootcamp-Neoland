const mongoose = require('mongoose');
const { Schema } = mongoose;
const ReservasSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    cantidad: { type: Number, require: true },
    estado: {
      type: String,
      enum: ['pendiente', 'confirmada', 'cancelada'],
      default: 'pendiente',
    },
    stocks: { type: mongoose.Schema.Types.ObjectId, ref: 'Stock' },
  },

  {
    timestamps: true,
  }
);

const Reserva = mongoose.model('Reserva', ReservasSchema);
module.exports = Reserva;
