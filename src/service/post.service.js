const Sequelize = require('sequelize');
const { BlogPost, PostCategory, Category } = require('../models');
const config = require('../config/config');

const environment = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[environment]);

const verifyCategoryExist = async (categoryIds) => {
  const categories = await Category.findAll();
  const exists = categoryIds.filter((id) => {
    const find = categories.some((category) => Number(category.id) === Number(id));
    return find;
  });
  if (exists.length !== categoryIds.length || categoryIds.length === 0) {
    return { status: 400, data: { message: 'one or more "categoryIds" not found' } };
  }
};

const createBlogPost = async (title, content, categoryIds, id) => {
  const t = await sequelize.transaction();
  const error = await verifyCategoryExist(categoryIds);
  if (error) return error;
  try {
    const createPost = await BlogPost.create({ title, content, userId: id }, { transaction: t });
    const promises = [];
    categoryIds.forEach((categoryId) => {
      promises.push(PostCategory.create({ categoryId, postId: createPost.id }, { transaction: t }));
    });
    await Promise.all(promises);

    await t.commit();
    return { status: 201, data: createPost };
  } catch (err) {
    await t.rollback();
    return { status: 500, data: 'error' };
  }
};

module.exports = { createBlogPost };