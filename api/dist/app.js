"use strict";

var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
var router = express.Router();

//Controllers
var productCtrl = require('./src/controllers/productController');
var productListCtrl = require('./src/controllers/productListController');

router.get('/api/items', async function (req, res) {
  json = await productListCtrl.getProductsByQuery(req.query.q);
  if (json.errno != undefined) res.send(500, json.message);

  res.json(json);
});

router.get('/api/items/:id', async function (req, res) {
  json = await productCtrl.getProductById(req.params.id, res);
  if (json.errno != undefined) res.send(500, json.message);

  res.json(json);
});

app.use(router);
app.listen(3000, function () {
  console.log("Node server running on http://localhost:3000");
});