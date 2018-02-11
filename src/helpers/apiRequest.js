const request = require('request');
const format = require('string-format');
const moment = require('moment');

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

//Check if user is in DB

module.exports.checkUser = 
(session, callback)  => {
    var options = {
        method: 'GET',
        url: 'https://iics-usersessions.herokuapp.com/api/bot/user/getuser',
        headers: 
        {
            'API-Token': 'eyJhbGciOiJIUzI1NiJ9.c2FtcGxlVG9rZW4.F2vUteLfaWAK9iUKu1PRZnPS2r_HlhzU9NC8zeBN28Q',
            'content-type': 'application/json' 
        },
        qs:{
                client: "iics",                
                fb_id: session.message.address.user.id,                           
        },       
        json: true  
        };

        request(options, function (error, response, body) {                    
        if (error) throw new Error(error);
        console.log(body, "checkuser")
        callback(null, body);
        });
}

module.exports.checkUserMW = 
(fbid, callback)  => {
    var options = {
        method: 'GET',
        url: 'https://iics-usersessions.herokuapp.com/api/bot/user/getuser',
        headers: 
        {
            'API-Token': 'eyJhbGciOiJIUzI1NiJ9.c2FtcGxlVG9rZW4.F2vUteLfaWAK9iUKu1PRZnPS2r_HlhzU9NC8zeBN28Q',
            'content-type': 'application/json' 
        },
        qs:{
                client: "iics",                
                fb_id: fbid,
        },       
        json: true  
        };

        request(options, function (error, response, body) {                    
        if (error) throw new Error(error);
        // console.log(body, "checkuser MW")
        callback(null, body);
        });
}

module.exports.checkAdmin = 
async (session)  => {
    var time = moment().add(5, 'minutes').startOf('minute');  
    // var time = now;
    var options = {
        method: 'POST',
        url: 'https://iics-usersessions.herokuapp.com/api/bot/startLive',
        headers: 
        {
            'API-Token': 'eyJhbGciOiJIUzI1NiJ9.c2FtcGxlVG9rZW4.F2vUteLfaWAK9iUKu1PRZnPS2r_HlhzU9NC8zeBN28Q',
            'content-type': 'application/json' 
        },
        qr: {
            client: "iics"
        },
        body:{                              
                client: "iics",
                id: session.message.address.user.id, 
                access: false,
                timestamp: time                          
        },       
        json: true  
        };

        request(options, function (error, response, body) {                    
        if (error) throw new Error(error);        
        console.log(body, "check admin")
        });
}

module.exports.createProfanity = 
async (session, name)  => {
    var option = {
        
        method: 'POST',
        url: 'https://iics-usersessions.herokuapp.com/api/bot/profanity',
        headers: 
        {
            'API-Token': 'eyJhbGciOiJIUzI1NiJ9.c2FtcGxlVG9rZW4.F2vUteLfaWAK9iUKu1PRZnPS2r_HlhzU9NC8zeBN28Q',
            'content-type': 'application/json' 
        },
        qr: {
            client: "iics",
            name: name,
            fb_id: session.message.address.user.id,
            timestamp: time                          
        },        
        json: true  
        };

        request(options, function (error, response, body) {                    
        if (error) throw new Error(error);        
        console.log(body, "check admin")
        });
}


/**END */



