'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
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
    free_shipping: { type: Boolean }
  }
});

var productListSchema = new Schema({
  author: {
    name: { type: String },
    lastname: { type: String }
  },
  categories: [String],
  items: [ItemSchema]
});

module.exports = mongoose.model('ProductList', productListSchema);