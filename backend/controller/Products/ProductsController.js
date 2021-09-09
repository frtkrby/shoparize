const db = require('../../config/db.config.js');
const Products = db.products;
const Op = db.Sequelize.Op;

var ProducstController = function() {
    // empty contructor
};

ProducstController.prototype.get = function(req, res, next) {
    Products.findAll(res.locals.params).then(data => {
        Products.count({where: res.locals.params.where})
          .then(function(count) {
              res.data = {
                data: data,
                recordsTotal: count
              };
              next();
          });
	}).catch(err => {
		next(err);
	});

};

module.exports = ProducstController;