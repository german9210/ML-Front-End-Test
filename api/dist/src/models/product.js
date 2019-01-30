'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var productSchema = new Schema({
  author: {
    name: { type: String },
    lastname: { type: String }
  },
  item: {
    id: { type: String },
    title: { type: String },
    price: {
      currency: { type: String },
      amount: { type: Number },
      decimals: { type: Number }
    },
    picture: { type: String },
    condition: { type: String },
    free_shipping: { type: Boolean },
    sold_quantity: { type: Number },
    description: { type: String }
  }
});

module.exports = mongoose.model('Product', productSchema);