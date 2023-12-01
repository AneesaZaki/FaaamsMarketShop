import mongoose from 'mongoose'
const ProductSchema = new mongoose.Schema({
  image: {
    data: Buffer,
    contentType: String
  },

  name: {
    type: String,
   
  },

  description: {
    type: String,
   
  },
  category: {
    type: String
  },
  quantity: {
    type: Number,

  },
  price: {
    type: Number,
 
  },

  shop: {type: mongoose.Schema.ObjectId, ref: 'Shop'}
})

export default mongoose.model('Product', ProductSchema)
