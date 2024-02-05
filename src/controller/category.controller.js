const { categoryService } = require('../service');

const getAllCategoriesController = async (_req, res) => {
  try {
    const { status, data } = await categoryService.getCategoryService();
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { status, data } = await categoryService.createCategoryService(name);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCategoryController,
  getAllCategoriesController,
};