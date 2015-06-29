"use strict";
var mongoose = require('mongoose');

/**
 * Drop all collections and import them from files.
 * @todo Move this to merchants area
 *
 * @param cb
 */
mongoose.Model.flush = function (cb) {
  var collection = require('./db/' + this.collection.name + '.json');

  // todo: reimplement with promises
  this.remove({}, function (err) {
    !err && this.create(collection, cb) || console.log(err);
  }.bind(this));
};

module.exports = {
  connect: function (conn) {
    mongoose.connect(conn);
  },
  API: require('./src/api'),
  manage: require('./src/manage')
}