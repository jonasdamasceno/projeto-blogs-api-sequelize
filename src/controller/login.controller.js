const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
// const a = process.env.JWT_SECRET;

module.exports = async (req, res) => {
  try {
    const { email } = req.body;
    const jwtConfig = { expiresIn: '7d' };
    const token = jwt.sign({ data: { email } }, JWT_SECRET, jwtConfig);
    return res.status(200).json({ token });
  } catch (error) {
    console.error('Error generating authentication token:', error);
    return res.status(500).json({ message: 'Internal Server Error ' });
  }
};
