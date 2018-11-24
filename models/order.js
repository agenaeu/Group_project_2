module.exports = function (sequelize, DataTypes) {
  let Orders = sequelize.define("orders", {
    rollName: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    tableNumber: DataTypes.INTEGER
  });

  Orders.associate = function (models) {

    Orders.belongsTo(models.Food);

  };

  return Orders;

};
