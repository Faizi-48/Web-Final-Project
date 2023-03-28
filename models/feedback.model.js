const sequelize = require("../config/db.config")
const { Sequelize, DataTypes } = require("sequelize");
    const Feedback = sequelize.define("feedback", {
      f_id: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
    });

    module.exports=(Feedback);