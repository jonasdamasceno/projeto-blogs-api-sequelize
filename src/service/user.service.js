const { User } = require('../models');

const createUser = async (displayName, email, password, image) =>  
  User.create({ displayName, email, password, image });

const findAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const findUserById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!user) return { status: 404, data: { message: 'User does not exist' } };
  return { status: 200, data: user };
};
const deleteUser = (id) => User.destroy({ where: { id } });

module.exports = { createUser, findAllUsers, findUserById, deleteUser };