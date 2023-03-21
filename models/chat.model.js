const sequelize = require("../config/db.config")
const { Sequelize, DataTypes } = require("sequelize");
    const Chat = sequelize.define("chat", {
      chat_id: {
        type: Sequelize.INT,
      },
      user1: {
        type: Sequelize.STRING,
      },
      user2: {
        type: Sequelize.STRING,
      },
    });

    module.exports=(Chat);
  