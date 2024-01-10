const { categoryService } = require('../service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await categoryService.createCategory(name);
  return res.status(status).json(data);
};

module.exports = {
  createCategory,
};