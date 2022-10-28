var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  var name = "Toy store Greenwich";
  res.render("index", { data: name });
});

module.exports = router;
