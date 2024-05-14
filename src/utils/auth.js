const { hash, compare } = require("bcryptjs");

async function hashedPass(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function verifyPass(password, hashedPassword) {
  const verifyPassword = await compare(password, hashedPassword);
  return verifyPassword;
}

export { hashedPass, verifyPass };
