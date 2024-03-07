const connection = require("../server");
const Sequelize = require("sequelize");

const user = connection.define("User", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  address: Sequelize.STRING,
});
module.exports = user;
const posts = connection.define("Posts", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = posts;
