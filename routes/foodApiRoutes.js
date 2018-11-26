var Food = require("../models/food.js");

module.exports = function (app) {
  // Get all Food
  app.get("/api/food", function (req, res) {
    Food.findAll({}).then(function (dbFood) {
      res.json(dbFood);
    });
  });



  // Create a new roll
  app.post("/api/food", function (req, res) {
    Food.create(req.body).then(function (dbFood) {
      res.json(dbFood);
    });
  });



  // Delete an example by id
  app.delete("/api/food/:id", function (req, res) {
    Food.destroy({ where: { id: req.params.id } }).then(function (dbFood) {
      res.json(dbFood);
    });
  });
};
