/**
 * Created by Agnislav Onufrijchuk on 21.05.2015.
 */
var mongoose = require('mongoose');
var db       = mongoose.connection;

var CategorySchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.Mixed,
    index: true
  },
  name: String,
  parentCategory: {
    type: mongoose.Schema.Types.Mixed,
    ref: 'Category'
  },
  subcategories: [{
    type: mongoose.Schema.Types.Mixed,
    ref: 'Category'
  }],
  products: [{
    type: mongoose.Schema.Types.Mixed,
    ref: 'Product'
  }]
});

var Category = module.exports = mongoose.model('Category', CategorySchema, 'categories');
