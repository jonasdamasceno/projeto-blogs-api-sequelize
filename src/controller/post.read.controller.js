const { postReadService } = require('../service');

const getPosts = async (_req, res) => {
  try {
    const { status, data } = await postReadService.getPosts();
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, data } = await postReadService.getPostById(id);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const searchPosts = async (req, res) => {
  try {
    const { q } = req.query;
    const { status, data } = await postReadService.searchPosts(q);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPosts,
  getPostById,
  searchPosts,
};