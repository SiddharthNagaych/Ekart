import Product from "../models/product.js";
const getProductByCategoryId = async (req, res) => {
  const {categoryId} = req.params;
  
    try {
    const products = await Product.find({category:categoryId});
    if(!product||product.length===0){
        res.status(404).json({success:false,message:"No products found for this category"});
    }
    res.status(200).json({success:true,products});
  } catch (error) {
   
    res.status(500).json({ error: error.message ,
      message:"Failed to recieve categories",
      error:error.message,
    });

  }
};
export { getProductByCategoryId };