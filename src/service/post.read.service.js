const Sequelize = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const { Op } = Sequelize;

const getPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: 200, data: posts };
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) {
    return { status: 404, data: { message: 'Post does not exist' } };
  }

  return { status: 200, data: post };
};

const searchPosts = async (query) => {
  if (!query) {
    const { status, data } = await getPosts();
    return { status, data };
  }

  const posts = await BlogPost.findAll({ where: {
    [Op.or]: [
      { title: { [Op.like]: `%${query}%` } },
      { content: { [Op.like]: `%${query}%` } },
    ],
  },
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
  });

  return { status: 200, data: posts };
};

module.exports = {
  getPosts,
  getPostById, 
  searchPosts, 
};