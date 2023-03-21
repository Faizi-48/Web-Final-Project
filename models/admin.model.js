const sequelize = require("../config/db.config")
const { Sequelize, DataTypes } = require("sequelize");

    const Admin = sequelize.define("admin", {
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
    });
    
    module.exports=(Admin);
  
