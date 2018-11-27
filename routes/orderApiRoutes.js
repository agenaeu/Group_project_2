var db = require("../models");

module.exports = function (app) {
    // Get all Food for table 1
    app.get("/api/order", function (req, res) {
        db.Order.findAll({
            where: {
                table: 1
            }
        }).then(function (table1) {
            res.json(table1);
        });
    });

    // Get all Food for table 2
    app.get("/api/order", function (req, res) {
        Order.findAll({
            where: {
                table: 2
            }
        }).then(function (table2) {
            res.json(table2);
        });
    });

    // Get all Food for table 3
    app.get("/api/order", function (req, res) {
        Order.findAll({
            where: {
                table: 3
            }
        }).then(function (table3) {
            res.json(table3);
        });
    });

    // Get all Food for table 4
    app.get("/api/order", function (req, res) {
        Order.findAll({
            where: {
                table: 4
            }
        }).then(function (table4) {
            res.json(table4);
        });
    });

    // Create a new order
    app.post("/api/food", function (req, res) {
        Order.create(req.body).then(function (dbOrder) {
            res.json(dbOrder);
        });
    });



    // Delete an example by id
    app.delete("/api/food/:id", function (req, res) {
        Order.destroy({ where: { table: req.params.table } }).then(function (dbOrder) {
            res.json(dbOrder);
        });
    });
};
