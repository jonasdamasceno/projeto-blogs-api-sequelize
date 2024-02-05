const validateCategoriesMiddleware = async (req, res, next) => {
  const { categoryIds, content, title } = req.body;
  if (!categoryIds) return res.status(400).json({ message: 'Some required fields are missing' });
  if (!content || !title) {
    return res
      .status(400).json({ message: 'Some required fields are missing' }); 
  }

  next();
};

module.exports = validateCategoriesMiddleware;