/**
 * Created by Agnislav Onufrijchuk on 27.06.2015.
 */
module.exports = {
  urlTemplates: {
    "self": "/products/{id}",
    "relationship": "/products/{ownerId}/{path}"
  }
};
//module.exports = {
//  urlTemplates: {
//    "self": "/products/{id}",
//    "relationship": "/products/{ownerId}/relationships/{path}",
//    "related": "/products/{ownerId}/{path}"
//  }
//};