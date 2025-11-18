import { Schema, model } from "mongoose";

// Filosifia Fat Model, skinny controller
// En definitiva un model bien gordo de funcionalidad y un controlador lo mas sencillo posible

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    stock: Number,
    available: Boolean
});

const Product = model('product', productSchema);

export default Product ; 


