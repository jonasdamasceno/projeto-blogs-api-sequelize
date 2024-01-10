const { User } = require('../models');

const createUser = async (displayName, email, password, image) =>  
  User.create({ displayName, email, password, image });

const findAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

module.exports = { createUser, findAllUsers };