var path = require("path");
// ===============================================================================
// ROUTING

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // ---------------------------------------------------------------------------
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
   // console.log(res);
  });
};