const request = require('request');
const format = require('string-format');

/**CARDS API */
module.exports = 
(group_name, callback) => {
    var options = {
        url: process.env.API_URI + '/cards',
        method: 'GET',
        qs: {
            group_name: group_name
        }
    }

    request(options, (err, httpRes, body ) => {
        if(!err){
           callback(null, JSON.parse(body));
        }else{callback(err, body)}
    })
    
}


module.exports.reference =
(payload_ref, callback) => {
    var options = {
        url: process.env.API_URI + '/ref',
        method: 'GET',
        qs: {
            payload_ref: payload_ref
        }
    }

    request(options, (err, httpRes, body ) => {
        if(!err){
           callback(null, JSON.parse(body));
        }else{callback(err, body)}
    })
}
/**END */

/**FB API */
module.exports.userProfile = 
(uid, fields, callback) => {
    var options = {
        url: format('https://graph.facebook.com/v2.6/{0}?fields={1}&access_token={2}', uid, fields, process.env.FB_ACCESS_TOKEN) ,
        method: 'GET'
    }

    request(options, (err, httpRes, body) => {
        !err ? callback(null, JSON.parse(body)) : callback(err, body); 
    })
}

/** MAILBOX */
module.exports.mailBoxLayer = 
(email, callback) => {
    var options = {
        url: `https://apilayer.net/api/check?access_key=${process.env.MAIL_API}&email=${email}`,
        method: 'GET'
    }

    request(options, (err, httpRes, body) => {
        console.log(body);
        if(err) console.log(err);        
        !err ? callback(null, JSON.parse(body)) : callback(err, body); 
    })
}

/**END */



