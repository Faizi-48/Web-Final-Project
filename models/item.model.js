const sequelize = require("../config/db.config")
const { Sequelize, DataTypes } = require("sequelize");
    const Item = sequelize.define("item", {
      item_id: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.STRING,
      },
      item_name: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      brand: {
        type:Sequelize.STRING,
      },
      color:{
        type: Sequelize.STRING,
      },
      description: {
        type:Sequelize.STRING,
      },
      status: {
        type:Sequelize.BOOLEAN,
      },
      date: {
        type:Sequelize.STRING,
      },
      image:{
        type:Sequelize.STRING,
      }


    });
    module.exports=(Item);
  