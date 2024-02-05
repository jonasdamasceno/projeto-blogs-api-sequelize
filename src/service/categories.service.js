const { Category } = require('../models');

const createCategoryService = async (name) => {
  const newCategory = await Category.create({ name });
  return { status: 201, data: newCategory };
};

const getCategoryService = async () => {
  const categories = await Category.findAll();
  return { status: 200, categories };
};

module.exports = {
  createCategoryService,
  getCategoryService,
};