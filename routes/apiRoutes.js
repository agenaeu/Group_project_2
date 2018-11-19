var db = require("../models");

module.exports = function(app) {
  // Get all Food
  app.get("/api/food", function(req, res) {
    db.Food.findAll({}).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // Get all orders
  app.get("/api/orders", function(req, res) {
    db.Order.findAll({}).then(function(dbOrder) {
      res.json(dbOrder);
    });
  });

  // Create a new roll
  app.post("/api/food", function(req, res) {
    db.Food.create(req.body).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // Create a new order
  app.post("/api/orders", function(req, res) {
    db.Order.create(req.body).then(function(dbOrder) {
      res.json(dbOrder);
    });
  });

  // Delete an example by id
  app.delete("/api/food/:id", function(req, res) {
    db.Food.destroy({ where: { id: req.params.id } }).then(function(dbFood) {
      res.json(dbFood);
    });
  });
};
