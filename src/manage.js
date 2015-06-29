'use strict';

var router = require('express').Router()
  , fs     = require('fs')
  , async  = require('async')
  , path   = require('path')
  ;

/**
 * Root. Show a message
 */
router.get('/', function (req, res) {
  res.json({message: 'Only /db/flush method is implemented'}); // todo: move to json-api format
});

/**
 * Flush the database. Temporary method. Will be moved to a merchant area
 */
router.get('/db/flush', function (req, res) {
  fs.readdir(path.join(__dirname, 'models'), function (err, schemas) {
    // todo: add error handling
    schemas && async.each(
      schemas,
      function (schema, cb) {
        require('./models/' + schema).flush(cb);
      },
      function (err) {
        res.json(err ? err : {message: 'db flushed'});
      });
  });
});

module.exports = router;
