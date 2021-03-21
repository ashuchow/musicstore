const mongoose = require("mongoose");

const product = new mongoose.Schema({

  name: String,
  brand: String,
  category: [{ type: String }],
  color: [{type: String}],
  dexterity: [{type: String}],
  imageurl: String,
  price: Number,
  rating: [{ type: Number }],
  reviews: [{ body: String, user: String, verified: String }],
  buyers: [{ type: String }],
  wishers: [{ type: String }],
});



module.exports = mongoose.model("Product", product);