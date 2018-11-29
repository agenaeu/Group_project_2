// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // chef route loads chef.html
  app.get("/chef", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/chef.html"));
  });

  // admin route loads admin.html
  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/admin.html"));
  });
  //  thank you route loads thankyou.html
  app.get("/thankyou", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/thankyou.html"));
  });

};
