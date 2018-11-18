module.exports = function (sequelize, DataTypes) {
  let Order = sequelize.define("order", {
    rollName: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    tableNumber: DataTypes.INTEGER
  });

  Order.associate = function (models) {

    Order.belongsTo(models.Food);

  };

  return Order;

};
