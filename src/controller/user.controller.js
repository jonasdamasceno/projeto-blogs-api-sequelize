const jwt = require('jsonwebtoken');
const { createUser } = require('../service/user.service');
const { userService } = require('../service');
const getUserFromToken = require('../util/getUserToken');

const { JWT_SECRET } = process.env;

const createUserController = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    await createUser(displayName, email, password, image);
    const jwtConfig = { expiresIn: '7d' };
    const token = jwt.sign({ data: { email } }, JWT_SECRET, jwtConfig);
    return res.status(201).json({ token });
  } catch (error) {
    console.error('Error generating authentication token:', error);
    return res.status(500).json({ message: 'Internal Server Error ' });
  }
};

const getUsersContreller = async (_req, res) => {
  try {
    const users = await userService.findAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Error' });
  }
};

const findUserByIdController = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.findUserById(id);
  return res.status(status).json(data);
};

const deleteUser = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const id = await getUserFromToken(authorization);
    await userService.deleteUser(id);
    return res.status(204).end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createUserController, getUsersContreller, findUserByIdController, deleteUser };
