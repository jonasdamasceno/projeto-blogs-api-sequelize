const { postTransformService } = require('../service');
const getUserFromToken = require('../util/getUserToken');

const addPost = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { title, content, categoryIds } = req.body;
    const { userId } = await getUserFromToken(authorization);
    const { status, data } = await postTransformService
      .addPost(title, content, categoryIds, userId);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    const { title, content } = req.body;
    const { userId } = await getUserFromToken(authorization);
    const { status, data } = await postTransformService.updatePost(id, title, content, userId);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    const { userId } = await getUserFromToken(authorization);
    const { status, data } = await postTransformService.deletePost(id, userId);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addPost,
  updatePost,
  deletePost,
};