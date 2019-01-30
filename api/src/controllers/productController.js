//File: controllers/product.js
//For example https://api.mercadolibre.com/items/MLA747981872
const url = 'https://api.mercadolibre.com/items/';
const fetch = require("node-fetch");


//GET - Return only one product by Id
exports.getProductById = async function (Id) {
  var productObj = '';
  var dataProd = '';
  var dataDesc = '';

  try {
    //fetch to MercadoLibre Api
    response = await fetch(url + Id);
    dataProd = await response.json();

    response = await fetch(url + Id + "/description");
    dataDesc = await response.json();

     var obj = {
      author: {
        name: "Germán",
        lastname: "Condori Morales"
        },
      item: {
        id: dataProd.id,
        title: dataProd.title,
        price: {
          currency: dataProd.currency_id,
          amount: Math.trunc(dataProd.price),
          decimals: (dataProd.price) % 1
          },
        picture: dataProd.pictures[0].url,
        condition: dataProd.condition,
        free_shipping: dataProd.shipping.free_shipping,
        sold_quantity: dataProd.sold_quantity,
        description: dataDesc.plain_text
        }
    };

    productObj = obj;
  } catch (error) {
    productObj = error;
  }
  return productObj;
}