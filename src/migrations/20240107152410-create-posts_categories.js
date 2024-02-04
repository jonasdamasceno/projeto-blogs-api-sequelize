'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize)  {
    await queryInterface.createTable('posts_categories', {
      postId: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        field: "post_id",
        references: {
          model: 'blog_posts',
          key: 'id'
        },
        onDelete: 'CASCADE',
      },
      categoryId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: "category_id",
        references: {
          key: 'id',
          model: 'categories',
        },
        onDelete: 'CASCADE',
      },
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, _Sequelize) { await queryInterface.dropTable('posts_categories');} 
};
