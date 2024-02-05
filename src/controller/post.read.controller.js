const getUserFromToken = require('../util/getUserToken');
const { postService } = require('../service');

const updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    const { title, content } = req.body;
    const userId = await getUserFromToken(authorization);
    const post = await postService.findPostByIdWithDetails(id);

    if (userId !== post.user.id) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    await postService.updatePost(id, title, content);

    const updatedPost = await postService.findPostByIdWithDetails(id);

    return res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { updatePostById };
