/* var express = require("express");
var router = express.Router(); */
var db = require("../models");

module.exports = function (app) {
  // Get all Sushi Seeds
  app.get("/api/food", function (req, res) {
    db.Food.findAll({})
      .then(function (dbFood) {
        res.json(dbFood);
      });
  });
  // get route for returning posts of a specific sushi
  app.get("/api/food/:id", function (req, res) {
    db.Food.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbFood) {
      res.json(dbFood);
      // console.log(dbFood);
    });
  });
  // Create a new roll
  app.post("/api/food", function (req, res) {
    console.log(req.body);
    db.Food.create({
      price: req.body.price,
      rollName: req.body.rollName,
      category: req.body.category,
      quantity: req.body.quantity
    })
      .then(function (dbFood) {
        res.json(dbFood);
      });
  });
  // Delete an example by id
  app.delete("/api/food/:id", function (req, res) {
    db.Food.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbFood) {
        res.json(dbFood);
      });
  });
  // Update an example by id
  app.put("/api/food", function (req, res) {
    db.Food.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });
};
