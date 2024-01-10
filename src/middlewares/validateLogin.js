const { loginService } = require('../service');

const checkLoginFields = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const user = await loginService.findEmail(email);
  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

module.exports = checkLoginFields;