var SessionController = function() {
    // empty constructor
};

SessionController.prototype.startSession = function(req, res, next) {
    // Database Connection or Pool, authentication, tokenization and all the other operations can be here...
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
