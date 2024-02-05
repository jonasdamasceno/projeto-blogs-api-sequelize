const { categoryService } = require('../service');

const validateCategoriesMiddleware = async (req, res, next) => {
  const { categoryIds, content, title } = req.body;

  if (!categoryIds || !content || !title) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const allCategories = await categoryService.getCategoryService();

  const isValidCategory = categoryIds.every((categoryId) => allCategories
    .some((category) => category.id === categoryId));

  if (!isValidCategory) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

module.exports = { validateCategoriesMiddleware };