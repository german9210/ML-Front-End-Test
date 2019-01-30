'use strict';

//File: controllers/productList.js
var url = 'https://api.mercadolibre.com/sites/MLA/search?q=';
var fetch = require("node-fetch");

//GET - Return all tvshows in the DB
exports.getProductsByQuery = async function (query) {
  var data = '';
  try {
    //fetch to MercadoLibre Api
    response = await fetch(url + query + '&limit=4');
    data = await response.json();
    //armar estructura json;
  } catch (error) {
    data = error;
  }
  return data;
};