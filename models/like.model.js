const sequelize = require("../config/db.config")
const { Sequelize, DataTypes, Model } = require("sequelize");
    const Like = sequelize.define("like_dislikes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
      },
      item_id: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.STRING,
      },
      likes: {
        type:Sequelize.INTEGER,
      },
      dislike: {
        type:Sequelize.INTEGER,
      },
    });
    
    module.exports=(Like);
  