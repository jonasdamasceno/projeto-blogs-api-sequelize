const { findAllUsers } = require('../service/user.service');

const getUsersContreller = async (_req, res) => {
  try {
    const users = await findAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Error' });
  }
};

module.exports = getUsersContreller;