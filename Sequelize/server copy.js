const Sequelize = require("sequelize");
const data = require("./data");
const app = require("./app");

const connection = new Sequelize("sys", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = connection;
// const posts = require("./models/models");
// const user = require("./models/models");
(async () => {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
    //Start the server
    app.listen(process.env.PORT, () => {
      console.log("Servier started");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

// (async () => {
//   console.log(user, posts);
//   await user.hasOne(posts);
//   await connection.sync({ force: true });
//   await user.bulkCreate(data);
//   await posts.create({
//     UserId: 1,
//     title: "Test",
//     description: "Sequelize.STRING",
//   });
//   console.log("All models were synchronized successfully.");
// })();
