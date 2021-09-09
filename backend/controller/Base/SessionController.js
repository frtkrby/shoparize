const db = require('../../config/db.config.js');
const Op = db.Sequelize.Op;

var SessionController = function() {
    // empty constructor
};

SessionController.prototype.startSession = function(req, res, next) {
    // Database Connection or Pool, authentication, tokenization and all the other operations can be here...

    // We can add more complex query builder or filterin in this section...

    // We are getting, limit, offset and filter options from the url query params and storing in res.locals
    var params = {};
    if(req.query.limit) {
        params.limit = parseInt(req.query.limit);
    }
    if(req.query.offset) {
        params.offset = parseInt(req.query.offset);
    }
    if(req.query.filters) {
        params.where = {};
        var filters = req.query.filters.split(',');
        filters.forEach(function(filt, ind) {
            splitFilter = filt.split('|');
            if(splitFilter.length == 2) {
                params.where[splitFilter[0]] = { [Op.like]: `%${splitFilter[1]}%` };
            } else if(splitFilter.length == 3) {
                if(splitFilter[1] == 'gteq') {
                    if(!params.where[splitFilter[0]]) {
                        params.where[splitFilter[0]] = { [Op.gte]: parseInt(splitFilter[2]) }
                    } else {
                        params.where[splitFilter[0]][Op.gte] = parseInt(splitFilter[2]);
                    }
                } else if(splitFilter[1] = 'lteq') {
                    if(!params.where[splitFilter[0]]) {
                        params.where[splitFilter[0]] = { [Op.lte]: parseInt(splitFilter[2]) }
                    } else {
                        params.where[splitFilter[0]][Op.lte] = parseInt(splitFilter[2]);
                    }
                }
            }
        });
    }
    res.locals.params = params;
    next();
};

SessionController.prototype.endSession = function(req, res) {
        // If we create a connection in start session we can close the connection in this function..
        // We can modify the api result, code, information, message and all the others about the api result..
        var response = {
            data: {},
            result: {}
        };
        // If there is an error, return error, else return response with code and message...
        if (res.err) {
            response.result.code = res.err.code + '';
            response.result.message = res.err.message;
            response.result.messageDetail = '';
            response.result.time = '';
            response.result.type = '';
            res.json(response);
        } else {
            response.data = res.data;
            response.result.code = '0';
            response.result.message = 'OPERATION_COMPLETED';
            response.result.messageDetail = 'OK';
            response.result.type = 'INFO';
            res.json(response);
        }    
};

SessionController.prototype.logRequest = function(req, res, next) {
    if(config.logger && config.logger === true) {
        // Log request...
    }
    next();
};

module.exports = SessionController;
