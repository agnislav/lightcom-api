/**
 * Created by Agnislav Onufrijchuk on 21.05.2015.
 */
var mongoose = require('mongoose');
var db       = mongoose.connection;

var ProductSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.Mixed,
    index: true
  },
  categories: [{
    type: mongoose.Schema.Types.Mixed,
    ref: 'Category'
  }],
  name: String,
  description: String,
  price: {
    currency: String,
    format: String,
    value: Number
  }
});

module.exports = mongoose.model('Product', ProductSchema);
