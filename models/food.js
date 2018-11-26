module.exports = function (sequelize, DataTypes) {
  let Sequelize = require("sequelize");
  let sequelize = require("../config/connection.js");

  let Food = sequelize.define("food", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    rollName: {
      types: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    category: {
      type: Sequelize.STRING,
    },
  },
    {
      classMethods: {
        associate: function (models) {
          Food.hasmany(models.Order);
        }
      }
    },
    {
      timestamp: false
    });

  Food.sync();
  /* Food.associate = function (models) {

    Food.hasMany(models.Orders);

  }; */

  return Food;

};
