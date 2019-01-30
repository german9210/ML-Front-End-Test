'use strict';

//File: controllers/product.js
//For example https://api.mercadolibre.com/items/MLA747981872
var url = 'https://api.mercadolibre.com/items/';
var fetch = require("node-fetch");

//GET - Return only one product by Id
exports.getProductById = async function (Id) {
  var data = '';
  try {
    //fetch to MercadoLibre Api
    response = await fetch(url + Id);
    data = await response.json();
    //armar estructura json;
  } catch (error) {
    data = error;
  }
  return data;
};