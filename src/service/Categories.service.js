const { Category } = require('../models');

const createCategoryService = (name) => {
  const newCategory = Category.create({ name });
  return newCategory;
};

const getAllCategories = () => Category.findAll();

module.exports = {
  createCategoryService,
  getAllCategories,
};