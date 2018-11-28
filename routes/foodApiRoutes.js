var db = require("../models");

module.exports = function (app) {
  // Get all Food
  app.get("/api/food", function (req, res) {
    db.Food.findAll({}).then(function (dbFood) {
      res.json(dbFood);
    });
  });



  // Create a new roll
  app.post("/api/food", function (req, res) {
    db.Food.create(req.body).then(function (dbFood) {
      res.json(dbFood);
    });
  });



  // Delete an example by id
  app.delete("/api/food/:id", function (req, res) {
    db.Food.destroy({ where: { id: req.params.id } }).then(function (dbFood) {
      res.json(dbFood);
    });
  });
};
