const Pedido = require('../models/pedido.model');
const Cebo = require('../models/cebo.model');
const Reserva = require('../models/reserva.model');
const Stock = require('../models/stock.model');
const User = require('../models/user.model');
const {
  esFechaValida,
  obtenerFechaActual,
  obtenerHoraActual,
} = require('../../utils/FechaYHoraActual');

//--------------------------------------------------------------------------------
//····································CREAR PEDIDO································
//--------------------------------------------------------------------------------

const crearPedido = async (req, res, next) => {
  try {
    // Extraemos el cebo de los parámetros de la solicitud
    const { idCebo } = req.params;

    // Extraemos el user del middleware que verifica el token de acceso
    const user = req.user;

    // Extraemos los datos adicionales del pedido del cuerpo de la solicitud
    const { fechaDelPedido, cantidad, estado } = req.body;

    // Verificamos si la fecha del pedido es válida (antes de las 12 del mediodía del día anterior)
    if (!esFechaValida(fechaDelPedido)) {
      return res.status(400).json({ error: 'Fecha del pedido no válida.' });
    }

    // Creamos un nuevo objeto Pedido con los datos recibidos
    const newPedido = new Pedido({
      user: user._id,
      cebo: idCebo,
      fechaDelPedido,
      cantidad,
      estado,
    });

    // Guardamos el nuevo pedido en la base de datos
    const pedidoGuardado = await newPedido.save();

    // Verificamos si el pedido se ha guardado correctamente
    if (pedidoGuardado) {
      // Agregamos el ID del nuevo pedido al array de pedidos del usuario
      user.pedidos.push(pedidoGuardado._id);
      await user.save();

      return res.status(200).json(pedidoGuardado);
    } else {
      return res.status(500).json({ error: 'Error al guardar el pedido.' });
    }
  } catch (error) {
    return next(error);
  }
};

//--------------------------------------------------------------------------------
//································BORRAR PEDIDO···································
//--------------------------------------------------------------------------------

const borrarPedido = async (req, res, next) => {
  try {
    const { idPedido } = req.params;

    // Buscar el pedido en la base de datos
    const pedido = await Pedido.findById(idPedido);

    // Verificar si el pedido existe
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido no encontrado.' });
    } else {
      // Buscar el usuario asociado al pedido
      const user = await User.findById(pedido.user);

      // Verificar si el usuario existe
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
      }

      // Buscar el índice del pedido en el array de pedidos del usuario
      const pedidoIndex = user.pedidos.indexOf(idPedido);

      // Verificar si el pedido está en el array de pedidos del usuario
      if (pedidoIndex === -1) {
        return res
          .status(404)
          .json({ error: 'Pedido no encontrado en el usuario.' });
      }

      // Eliminar el pedido del array de pedidos del usuario
      user.pedidos.splice(pedidoIndex, 1);

      // Guardar los cambios en el usuario para que se reflejen en la base de datos
      await user.save();

      // Eliminar el pedido de la base de datos
      await Pedido.findByIdAndDelete(idPedido);

      return res
        .status(200)
        .json({ message: 'Pedido cancelado y eliminado correctamente.' });
    }
  } catch (error) {
    return next(error);
  }
};

//--------------------------------------------------------------------------------
//························CONFIRMAR O CANCELAR PEDIDO·····························
//--------------------------------------------------------------------------------

const actualizarEstadoPedido = async (req, res, next) => {
  try {
    const { idPedido } = req.params;

    // Buscar el pedido en la base de datos
    const pedido = await Pedido.findById(idPedido);

    // Verificar si el pedido existe
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido no encontrado.' });
    }

    // Verificar si el pedido ya está confirmado
    if (pedido.estado === 'confirmado') {
      return res.status(400).json({ error: 'El pedido ya está confirmado.' });
    }

    // Cambiar el estado del pedido a "confirmado"
    pedido.estado = 'confirmado';
    await pedido.save();

    // Actualizar el stock si el pedido fue confirmado
    if (pedido.estado === 'confirmado') {
      const { cebo, cantidad } = pedido;
      const stock = await Stock.findOne({ cebo });

      if (!stock) {
        // Si no existe un stock para este cebo, crear uno nuevo y asociarlo al cebo
        const newStock = new Stock({
          cebo,
          fechaStockActualizado: obtenerFechaActual(), // Utilizamos la función para obtener la fecha actual
          horaStockActualizado: obtenerHoraActual(), // Utilizamos la función para obtener la hora actual
          stockTotal: 0,
          CantidadesPedidosReservas: cantidad,
          stockDisponible: 0,
        });

        await newStock.save();
      } else {
        // Actualizar el stock de cantidadesPedidosReservas y stockDisponible
        stock.CantidadesPedidosReservas += cantidad;
        stock.stockDisponible -= cantidad;

        await stock.save();
      }
    }

    return res
      .status(200)
      .json({ message: 'Estado del pedido actualizado correctamente.' });
  } catch (error) {
    return next(error);
  }
};

//--------------------------------------------------------------------------------
//····································GET ALL PEDIDOS·····························
//--------------------------------------------------------------------------------

const getAllPedidos = async (req, res, next) => {
  try {
    const pedidos = await Pedido.find().populate('user').populate('cebo');
    if (pedidos) {
      return res.status(200).json(pedidos);
    } else {
      return res.status(404).json('No se encontraron pedidos.');
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  crearPedido,
  actualizarEstadoPedido,
  borrarPedido,
  getAllPedidos,
};
