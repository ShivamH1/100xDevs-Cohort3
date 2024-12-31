//Avoid circular dependencies that means 1 file uses content of 2 file, 2 file uses content of 1 file

const JWT_ADMIN_PASS = process.env.JWT_ADMIN_PASS;
const JWT_USER_PASS = process.env.JWT_USER_PASS;

module.exports = {
  JWT_ADMIN_PASS,
  JWT_USER_PASS,
};
