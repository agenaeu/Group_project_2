var db = require("../models");
module.exports = function (app) {
    // Get all orders
    app.get("/api/orders", function (req, res) {
        db.Order.findAll({}).then(function (dbOrder) {
            res.json(dbOrder);
        });
    });

    // Create a new order
    app.post("/api/orders", function (req, res) {
        db.Order.create(req.body).then(function (dbOrder) {
            res.json(dbOrder);
        });
    });
};
