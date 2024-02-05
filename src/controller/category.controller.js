const { CategoryService } = require('../service');
const { createCategoryService } = require('../service/categories.service');

const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { status, data } = createCategoryService(name);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllCategoriesController = async (_req, res) => {
  try {
    const { status, data } = CategoryService.getCategoryService();
    return res.status(status).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCategoryController,
  getAllCategoriesController,
};