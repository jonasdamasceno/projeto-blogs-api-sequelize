const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../models');
const config = require('../config/config');

const environment = process.env.NODE_ENV;
const sequelize = new Sequelize(config[environment]);

const createBlogPost = async (title, content, categoryIds, userId) => {
  const result = await sequelize.transaction(async (transaction) => {
    const newPost = await BlogPost.create({
      title, content, userId, published: new Date(), updated: new Date(),
    }, { transaction });

    const postId = newPost.dataValues.id;

    const addPostCategories = categoryIds.map(async (categoryId) => {
      await PostCategory.create({
        postId, categoryId,
      }, { transaction });
    });

    await Promise.all(addPostCategories);

    return newPost;
  });

  return result;
};

module.exports = { createBlogPost };