const { Category } = require('../models');

const getCategoryService = async () => {
  const categories = await Category.findAll();
  return { status: 200, data: categories };
};

const createCategoryService = async (name) => {
  const newCategory = await Category.create({ name });
  return { status: 201, data: newCategory };
};

module.exports = {
  createCategoryService,
  getCategoryService,
};