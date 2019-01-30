var ItemObj = new Object({
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
  }
});


var productListObj= new Schema({
  author: {
    name: { type: String },
    lastname: { type: String }
  },
  categories: [String],
  items: [ItemObj],
});

module.exports(productListObj);