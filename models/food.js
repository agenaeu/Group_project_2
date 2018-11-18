module.exports = function (sequelize, DataTypes) {
  let Food = sequelize.define("food", {
    rollName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING
  });

  Food.hasMany(models.Order);

  return Food;

};
