import Category from "../models/category.js";
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({success:true,categories});
  } catch (error) {
   
    res.status(500).json({ error: error.message ,
      message:"Failed to recieve categories",
      error:error.message,
    });

  }
};
export { getAllCategories };