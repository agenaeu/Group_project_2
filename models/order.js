module.exports = function (sequelize, dataTypes) {
  let orders = sequelize.define("orders", {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    rollName: {
      type: dataTypes.STRING,
    },
    category: {
      type: dataTypes.STRING,
    },
    tableNum: {
      type: dataTypes.INTEGER,
    }

  });/* ,
    {
      timestamp: false
    },
    {
      classMethods: {
        associate: function (models) {
          orders.belongsTo(models.Food,
            {
              onDelete: "cascade",
              foreignKey: {
                allowNull: false
              }
            })
        }
      }
    }); */
  orders.sync();

  return orders;

};
