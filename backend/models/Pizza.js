import mongoose from 'mongoose';

const pizzaModel = new mongoose.Schema({
   name: {
    type: String,
    required: true,
   },
   description:{
    type: String,
    required: true
   },
   price:{
     type: Number,
     required: true
   },
   imageUrl: String,
   size: { type: String, enum: ['small', 'medium', 'large'], required: true },
})

const Pizza = mongoose.model('Pizza', pizzaModel);
export default Pizza;
