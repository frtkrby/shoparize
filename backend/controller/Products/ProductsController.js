const db = require('../../config/db.config.js');
const Products = db.products;
const Op = db.Sequelize.Op;

var ProducstController = function() {
    // empty contructor
};

ProducstController.prototype.get = function(req, res, next) {

    Products.findAll(res.locals.params).then(data => {
		res.data = {
            data: data,
            recordsTotal: 1,
            recordsFiltered: 1
        };
        next();
	}).catch(err => {
		next(err);
	});

};

module.exports = ProducstController;