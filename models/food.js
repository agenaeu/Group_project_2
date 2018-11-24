module.exports = function (sequelize, DataTypes) {
  let Food = sequelize.define("food", {
    rollName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING
  });

  /* Food.associate = function (models) {

    Food.hasMany(models.Orders);

  }; */

  return Food;

};
