module.exports = function (sequelize, DataTypes) {
  let Sequelize = require("sequelize");
  let sequelize = require("../config/connection.js");

  let Order = sequelize.define("order", {
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
      timestamp: false
    },
    {
      classMethods: {
        associate: function (models) {
          Order.belongsTo(models.Food,
            {
              onDelete: "cascade",
              foreignKey: {
                allowNull: false
              }
            })
        }
      }
    });
  Order.sync();

  return Order;

};
