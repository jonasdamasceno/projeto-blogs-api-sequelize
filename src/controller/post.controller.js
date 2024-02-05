const jwt = require('jsonwebtoken');
const { postService } = require('../service');

const extractUserIdFromToken = async (authorization) => {
  const token = authorization.split(' ')[1];
  const { JWT_SECRET } = process.env;
  const decoded = jwt.verify(token, JWT_SECRET);

  return decoded.data.userId; 
};

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { authorization } = req.headers;
    const userId = await extractUserIdFromToken(authorization);
    const createdPost = await postService.createBlogPost(title, content, categoryIds, userId);
    return res.status(201).json(createdPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createPost };
