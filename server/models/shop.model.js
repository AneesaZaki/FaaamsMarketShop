import mongoose from 'mongoose'
import crypto from 'crypto'

const ShopSchema = new mongoose.Schema({
    name: {
        type: String,
      
    },
    description: {
        type: String,
    
    },
    image: {
        data: Buffer,
        contentType: String
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    },
});
export default mongoose.model('Shop', ShopSchema);
