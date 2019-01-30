//File: controllers/productList.js
const url = 'https://api.mercadolibre.com/sites/MLA/search?q=';
const fetch = require("node-fetch");

//GET - Return all tvshows in the DB
exports.getProductsByQuery = async function (query) {
  var productListObj = '';
  var list = [];
  var dataProducts = '';
  var categories = [];

  try {
    //fetch to MercadoLibre Api
    response = await fetch(url + query + '&limit=4');
    dataProducts = await response.json();

    //get products
    if (dataProducts.results.length > 0) {
      dataProducts.results.forEach(element => {
        obj = {
          id: element.id,
          title: element.title,
          price: {
            currency: element.currency_id,
            amount: Math.trunc(element.price),
            decimals: (element.price) % 1
          },
          picture: element.thumbnail,
          condition: element.condition,
          free_shipping: element.shipping.free_shipping,
          state: element.address.state_name
        }

        list.push(obj);
      });
    }
    //get categories
    if (dataProducts.filters.length>0 && dataProducts.filters[0].values[0].path_from_root.length > 0)
      dataProducts.filters[0].values[0].path_from_root.forEach(element => {
          categories.push(element.name);
        });

    var ListObj = {
      author: {
        name: '',
        lastname: ''
      },
      categories: categories,
      items: list,
    };

    productListObj = ListObj;

  } catch (error) {
    productListObj = error;
  }
  return productListObj;
}