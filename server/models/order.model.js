import mongoose from 'mongoose'
const CartItemSchema = new mongoose.Schema({
  product: {type: mongoose.Schema.ObjectId, ref: 'Product'},
  quantity: Number,
  shop: {type: mongoose.Schema.ObjectId, ref: 'Shop'},
  status: {type: String,
    default: 'Not processed',
    enum: ['Not processed' , 'Processing', 'Shipped', 'Delivered', 'Cancelled']}
})
const CartItem = mongoose.model('CartItem', CartItemSchema)
const OrderSchema = new mongoose.Schema({
  products: [CartItemSchema],
  customer_name: {
    type: String,
    
    
  },
  customer_email: {
    type: String,
 
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
     },
  
  // delivery_address: {
  //   street: {type: String,},
  //   city: {type: String},
  //   state: {type: String},
  //   zipcode: {type: String},
  //   country: {type: String'}
  // },

    delivery_address: {
    street: {type: String, required: 'Street is required'},
    city: {type: String, required: 'City is required'},
    state: {type: String},
    zipcode: {type: String, required: 'Zip Code is required'},
    country: {type: String, required: 'Country is required'}
  },
  payment_id: {},
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },

  // user: {type: mongoose.Schema.ObjectId, ref: 'Users'}
  
    user: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

const Order = mongoose.model('Order', OrderSchema)

export {Order, CartItem}
