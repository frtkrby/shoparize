/* eslint global-require: "off" */
const {gitDescribe, gitDescribeSync} = require('git-describe');

var VersionController = function() {
    // empty constructor
};

VersionController.prototype.get = function(req, res) {
    try {
        const gitInfo = gitDescribeSync();
        versionInfo = gitInfo.tag;
    } catch (err) {
        versionInfo = config.app.apiversion;
    }
    res.send(versionInfo);
};

module.exports = VersionController;
