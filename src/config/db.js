import mongoose from 'mongoose' ;

const conn = mongoose.connect('mongodb://localhost:27017/api-shop');

console.log('Conecta con mongoDb') ;

export default conn;

