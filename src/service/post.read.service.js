const Sequelize = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const { Op } = Sequelize;

const searchPosts = (query) => BlogPost.findAll({ where: {
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

module.exports = { searchPosts };