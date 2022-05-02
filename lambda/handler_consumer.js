'use strict()';

module.exports.consumer = function(event, context, callback) {

    console.log('\n');
    console.log('########################################################');
    console.log('Invoking consumer function');
    console.log("message body: " + event.Records[0].body);
    console.log('########################################################');
    console.log('\n');

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: event.Records[0].body
        }),
    };

    callback(null, response);

};
