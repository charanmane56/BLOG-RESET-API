const bcrypt = require("bcryptjs");

const comparePassword = async (password, hashedPassword) => {
return bcrypt.compare(password, hashedPassword)
};
module.exports = comparePassword;