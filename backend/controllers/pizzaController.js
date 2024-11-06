import Pizza from '../models/Pizza.js';

// Get all pizzas
export const getPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.status(200).json({
      status: 'success',
      count: pizzas.length,
      data: {
        pizzas: pizzas
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pizzas', error });
  }
};



// Create multiple pizzas
export const createMultiplePizzas = async (req, res) => {
  try {
    const pizzas = req.body; 
    
    if (!Array.isArray(pizzas) || pizzas.length === 0) {
      return res.status(400).json({ message: 'Please provide an array of pizzas to create.' });
    }

    const createdPizzas = await Pizza.insertMany(pizzas);

    return res.status(201).json({
      message: 'Pizzas created successfully!',
      data: createdPizzas
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

