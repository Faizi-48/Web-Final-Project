const sequelize = require("../config/db.config")
const { Sequelize, DataTypes } = require("sequelize");
    const User = sequelize.define("user", {
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      contact: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      zipcode: {
        type: Sequelize.INTEGER,
      },

    });
  
    module.exports=(User);