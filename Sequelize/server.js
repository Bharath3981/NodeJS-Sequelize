const { Sequelize, Model, DataTypes } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("development", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("user", {
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: "green",
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  username: DataTypes.STRING,
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

(async () => {
  //await sequelize.sync({ force: true });
  //const jane = await User.create({ username: "alice123", isAdmin: true });
  // await User.update(
  //   { lastName: "Doe", firstName: "bar" },
  //   {
  //     where: {
  //       firstName: null,
  //     },
  //   }
  // );

  const User = await sequelize.define("user", {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        throw new Error("Do not try to set the `fullName` value!");
      },
    },
  });

  const users = await User.findAll({
    attributes: ["firstName"],
  });
  console.log("All users:", JSON.stringify(users, null, 2));
})();
