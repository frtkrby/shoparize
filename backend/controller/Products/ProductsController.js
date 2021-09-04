var ProducstController = function() {
    // empty contructor
};

ProducstController.prototype.get = function(req, res, next) {

    res.data = {
        data: { 'product': 1},
        recordsTotal: 1,
        recordsFiltered: 1
    };
    next();

};

module.exports = ProducstController;