const sequelize = require("../config/db.config")
const { Sequelize, DataTypes } = require("sequelize");
    const Reward = sequelize.define("reward", {
      reward_id: {
        type: Sequelize.INTEGER,
      },
      reward_fee: {
        type: Sequelize.INTEGER,
      },
      item_id: {
        type: Sequelize.INTEGER,
      },
    });
  module.exports=(Reward);
  