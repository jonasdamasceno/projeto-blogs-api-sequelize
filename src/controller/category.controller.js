const { CategoryService } = require('../service');

const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const addedCategory = CategoryService.createCategoryServie(name);
    console.log(addedCategory);
    return res.status(201).json(addedCategory);
  } catch (error) {
    console.error('aff');
    return res.status(500).json({ message: 'Internal Error' });
  }
};

const getAllCategoriesController = async (req, res) => {
  try {
    const categories = CategoryService.getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Error' });
  }
};

module.exports = {
  createCategoryController,
  getAllCategoriesController,
};