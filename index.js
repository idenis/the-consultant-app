"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/request", function(req, res) {
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.consultantType
      ? req.body.result.parameters.consultantType
      : "What is the consultant type?";
  return res.json({
    speech: speech,
    displayText: speech,
    source: "the-consultant-app"
  });
});



restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
