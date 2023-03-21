const sequelize = require("../config/db.config")
const { Sequelize, DataTypes } = require("sequelize");
    const Feedback = sequelize.define("feedback", {
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      published: {
        type: Sequelize.BOOLEAN,
      },
    });

    module.exports=(Feedback);