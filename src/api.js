'use strict';

var router = require('express').Router();
var API    = require('json-api');

var models = {
  Product: require('./models/product'),
  Category: require('./models/category')
};

var adapter    = new API.dbAdapters.Mongoose(models);
var registry   = new API.ResourceTypeRegistry();
//var Controller = new API.controllers.API(registry);

['products', 'categories'].forEach(function (resourceType) {
  var description       = require('./resource-descriptions/' + resourceType);
  description.dbAdapter = adapter;
  for (let key in description.urlTemplates) {
    if (description.urlTemplates.hasOwnProperty(key)) {
      description.urlTemplates[key] = 'http://localhost:3000/v1' + description.urlTemplates[key]; // todo: fix this shit
    }
  }
  registry.type(resourceType, description);
});

var DocsController = new API.controllers.Documentation(registry, {name: 'LightCom API'});

// Set up our controllers
var APIController  = new API.controllers.API(registry);
var Front          = new API.httpStrategies.Express(APIController, DocsController);
var requestHandler = Front.apiRequest.bind(Front);

router.get("/", Front.docsRequest.bind(Front));

router.get('/:type(products)', requestHandler);
router.get('/:type(products)/:id', requestHandler);
router.get('/:type(products)/:id/:relationship', requestHandler);
router.get('/:type(products)/:id/relationships/:relationship', requestHandler);

router.get('/:type(categories)', requestHandler);
router.get('/:type(categories)/:id', requestHandler);
router.get('/:type(categories)/:id/:relationship', requestHandler);
router.get('/:type(categories)/:id/relationships/:relationship', requestHandler);

module.exports = router;
