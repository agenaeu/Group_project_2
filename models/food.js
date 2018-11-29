module.exports = function (sequelize, dataTypes) {
  let Food = sequelize.define("Food", {
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
    quantity: {
      type: dataTypes.INTEGER,
    }

  });/* ,
    {
      classMethods: {
        associate: function (models) {
          Food.hasmany(models.orders);
        }
      }
    },
    {
      timestamp: false
    }
  ); */

  Food.sync();
  /* Food.associate = function (models) {

    Food.hasMany(models.Orders);

  }; */

  return Food;

};
