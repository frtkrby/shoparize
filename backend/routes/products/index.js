var ProductsController = require(__base + '/controller/Products/ProductsController');

var productsController = new ProductsController();

module.exports = function (router) {

    // sometimes we need to define version for the services, I added version parameter to url because of this..
    router.get('/api/:version/products', productsController.get);

};