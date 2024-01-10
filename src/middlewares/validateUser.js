// const findEmail = require('../service/login.service');

// const checkUserFields = async (req, res, next) => {
//   const { displayName, email, password } = req.body;
//   const EMAIL_REGEX = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
//   const hasValidEmailForm = EMAIL_REGEX.test(email);
//   if (displayName.length < 8) {
//     return { status: 400, 
//       data: { message: '"displayName" length must be aat least 8 caracters long' } };
//   }
//   if (password.length < 6) {
//     return { status: 409, 
//       data: { message: '"password" length must be at least 6 caracters long' } };
//   }
//   if (!hasValidEmailForm) return res.status(400).json({ message: '"email" must be a valid email' });
//   const userEmail = findEmail(email);
//   if (userEmail) return res.status(409).json({ message: 'User already registred' });
//   next();
// };

// module.exports = checkUserFields;

const findEmail = require('../service/login.service');

const isDisplayNameValid = (displayName) => (displayName.length < 8);
const isPasswordValid = (password) => (password.length < 6);
const isEmailValid = (email) => {
  const EMAIL_REGEX = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
  return EMAIL_REGEX.test(email);
};

const checkUserFields = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (isDisplayNameValid(displayName)) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (isPasswordValid(password)) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  if (!isEmailValid(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  const user = await findEmail(email);
  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

module.exports = checkUserFields;
// const findEmail = require('../service/login.service');

// const isDisplayNameValid = (displayName) => displayName.length >= 8;
// const isPasswordValid = (password) => password.length >= 6;
// const isEmailValid = (email) => {
//   const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
//   return EMAIL_REGEX.test(email);
// };

// const checkUserFields = async (req, res, next) => {
//   const { displayName, email, password } = req.body;

//   if (!isDisplayNameValid(displayName)) {
//     return res.status(400)
//       .json({ mensagem: '"displayName" length must be at least 8 characters long' });
//   }

//   if (!isPasswordValid(password)) {
//     return res.status(400)
//       .json({ mensagem: '"password" length must be at least 6 characters long' });
//   }

//   if (!isEmailValid(email)) {
//     return res.status(400).json({ mensagem: '"email" must be a valid email' });
//   }

//   const user = await findEmail(email);
//   if (user) {
//     return res.status(409).json({ mensagem: 'User already registered' });
//   }

//   next();
// };

// module.exports = checkUserFields;
