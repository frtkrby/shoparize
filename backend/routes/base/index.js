var VersionController = require(__base + '/controller/Base/VersionController');
var SessionController = require(__base + '/controller/Base/SessionController');

var versionController = new VersionController();
var sessionController = new SessionController();

// This function can be used for to get connection pool, create database connection, checking user authentication and all the other controls for the system and user..
module.exports.start = function(router) {
    // API for to get current version of backend
    router.get('/api/version', versionController.get);
    router.all('/api/:version/*', sessionController.startSession);
};

// This function can be used for to release connection pool, close database connection and other operations what you want..
module.exports.end = function(router) {
    // body...
    router.all('/api/:version/*', sessionController.logRequest, sessionController.endSession);
}
