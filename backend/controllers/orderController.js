import Order from '../models/Order.js';
import Pizza from '../models/Pizza.js';
 

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const { userId, pizzaItems, deliveryAddress } = req.body;
    
    
    let totalPrice = 0;


    for (let item of pizzaItems) {
      const pizza = await Pizza.findById(item.pizzaId);
      if (!pizza) {
        return res.status(400).json({ message: `Pizza with ID ${item.pizzaId} not found.` });
      }
      totalPrice += pizza.price * item.quantity;
    }


    const order = await Order.create({ userId, pizzaItems, totalPrice, deliveryAddress });
    return res.status(201).json({
      status: 'success',
      data: {
        orderDetails: order
      }
    });
  } catch (error) {
    console.error(error);
    // Return an error message if something goes wrong
    return res.status(500).json({ message: 'An error occurred while creating the order. Please try again later.' });
  }
};



export const getOrderDetails = async (req, res) => {
  try {
 
    const { orderId } = req.params;
    const order = await Order.findById(orderId).populate('pizzaItems.pizzaId');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json({
      status: 'success',
      data: {
        orderDetails: order
      }
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred while fetching the order details.' });
  }
};

