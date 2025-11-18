import Product from "../models/products.model.js";

export const getAll = async (req, res) => {

  const products = await Product.find();

  res.json(products) ;
  
};

export const getById = async (req, res) => {
  
  const { productId } = req.params;

  const product = await Product.findById(productId);

  res.json(product) ;
  
};

export const getByCategory = async (req, res) => {

  const { categoryName } = req.params;

  // El where es igual que categoria y stock mayor o igual que 10 
  const products = await Product.find({
    category : categoryName,
    stock: {
      $gte:10
    }
  });

  res.json(products) ;
  
};

export const create = async (req, res) => {

  const newProduct = await Product.create(req.body);

  res.json(newProduct) ;
  
};

export const updateById = async ( req, res ) => {

  const { productId } = req.params;

  // Si no le ponemos new:true, nos va a devolver el objeto anterior a la actualizacion
  const product = await Product.findByIdAndUpdate(productId,req.body,{new:true}) ;

  res.json(product);
}
