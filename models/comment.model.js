const sequelize = require("../config/db.config")
const { Sequelize, DataTypes } = require("sequelize");
    const Comment = sequelize.define("comment", {
      comment_id: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.STRING,
      },
      item_id: {
        type: Sequelize.INTEGER,
      },
      comment: {
        type: Sequelize.STRING,

      },
    });
    
    module.exports=(Comment);