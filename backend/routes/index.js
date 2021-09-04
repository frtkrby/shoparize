var express = require('express');
var router = express.Router();

var BaseRouter = require("./base/");
var ProductsRouter = require("./products/");

BaseRouter.start(router);
ProductsRouter(router);
BaseRouter.end(router);

module.exports = router;