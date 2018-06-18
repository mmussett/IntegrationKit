'use strict';
var dataProvider = require('../../data/multiplex/notification.js');

module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: name
     * produces: application/json
     * responses: 200
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        console.log("notification handler");
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                console.log("error");
                next(err);
                return;
            }
            console.log("success");
            console.log(data);
            console.log(data.responses);
            res.status(status).send(data && data.responses);
        });
    }
};