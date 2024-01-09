const { User } = require('../models');

const findEmail = (email) => User.findOne({ where: { email } });

module.exports = findEmail;