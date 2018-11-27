module.exports = function (sequelize, dataTypes) {



  let Order = sequelize.define("order", {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    rollName: {
      type: dataTypes.STRING,
    },
    price: {
      type: dataTypes.INTEGER,
    },
    category: {
      type: dataTypes.STRING,
    },
    tableNum: {
      type: dataTypes.ENUM('Table 1', 'Table 2', 'Table 3', 'Table 4')
    }

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
