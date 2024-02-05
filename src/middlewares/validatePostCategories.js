const { categoryService } = require('../service');

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const { data } = await categoryService.getCategories();

  const isValidCategory = categoryIds.every((categoryId) => data
    .some((category) => category.id === categoryId));

  if (!isValidCategory) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

module.exports = validatePost;