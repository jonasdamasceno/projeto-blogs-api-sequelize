const jwt = require('jsonwebtoken');
const { postService } = require('../service');

const getUserId = async (authorization) => {
  const token = authorization.split(' ')[1];
  const secret = process.env.JWT_SECRET;
  const decoded = jwt.verify(token, secret);

  return decoded.data.userId;
};

const addPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { authorization } = req.headers;
    const userId = await getUserId(authorization);
    const post = await postService.addPost(title, content, categoryIds, userId);
    return res.status(201).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addPost,
};