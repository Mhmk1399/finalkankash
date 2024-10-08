
import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    cpu: {
        type: String,
        required: false,
    },
    ram: {
        type: String,
        required: false,
    },
    hard:{
        type: String,
        required: false,
    },
    gpu: {
        type: String,
        required: false,
    },
    color: {
        type: String,
        required: true,
    },
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
    }

}, { timestamps: true });

export default mongoose.models.Products || mongoose.model('Products', ProductSchema)