// *********************************************************************************
// order-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/orders/", function(req, res) {
    db.orders.findAll({})
      .then(function(dbOrders) {
        res.json(dbOrders);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/orders/category/:category", function(req, res) {
    db.orders.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbOrders) {
        res.json(dbOrders);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/orders/:id", function(req, res) {
    db.orders.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbOrders) {
        res.json(dbOrders);
      });
  });

  // POST route for saving a new post
  app.post("/api/orders", function(req, res) {
    console.log(req.body);
    db.orders.create({
      rollName: req.body.rollName,
      quantity: req.body.quantity,
      tableNum: req.body.tableNum
    })
      .then(function(dbOrders) {
        res.json(dbOrders);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/orders/:id", function(req, res) {
    db.orders.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbOrders) {
        res.json(dbOrders);
      });
  });

  // PUT route for updating posts
  app.put("/api/orders", function(req, res) {
    db.orders.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbOrders) {
        res.json(dbOrders);
      });
  });
};

