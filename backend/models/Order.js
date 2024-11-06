import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  pizzaItems: [
    {
      pizzaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pizza' },
      quantity: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  status: { type: String, enum: ['pending', 'delivered'], default: 'pending' },
});


const Order = mongoose.model('Order', OrderSchema);

export default Order;

