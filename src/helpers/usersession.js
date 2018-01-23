var request = require('request');
const moment = require('moment-timezone');
const api = require('./apiRequest')

exports.newMessageFromBot = function (params){
    console.log("new message from bot")
    api.checkUserMW(params.fb_id, (err, res) => {    
        if(res.d.onSupport){
            console.log("reached newMessage in bot");
            var options = {
                method: 'PUT',
                url: 'https://iics-usersessions.herokuapp.com/api/bot/session/updatesessionbot',
                headers: 
                {
                    'authorization-token': 'eyJhbGciOiJIUzI1NiJ9.c2FtcGxlVG9rZW4.F2vUteLfaWAK9iUKu1PRZnPS2r_HlhzU9NC8zeBN28Q',
                    'content-type': 'application/json' 
                },
                qs:{
                        client: "iics",                
                        fb_id: params.fb_id,
                        message_type: params.message_body.message_type,
                        message: params.message_body.message     
                },       
                json: true  
                };

                request(options, function (error, response, body) {
                if (error) throw new Error(error);

            });
        }
    }); //end first req
}

exports.createUserIfUnique = function (event, dep){ 
    if(dep == null){
        dep = "unset";
    }
    console.log("reached createUser in bot");
    var options = {
        method: 'POST',
        url: 'https://iics-usersessions.herokuapp.com/api/bot/user/createuser',
        headers: 
        {
            'authorization-token': 'eyJhbGciOiJIUzI1NiJ9.c2FtcGxlVG9rZW4.F2vUteLfaWAK9iUKu1PRZnPS2r_HlhzU9NC8zeBN28Q',
            'content-type': 'application/json' 
        },
        qs:{
                client: "iics",                
                user_name: event.message.user.name,
                fb_id: event.message.address.user.id,                             
                department: dep,
                subscription: true,                
                facAccess: false,
                onSupport: false
        },
        json: true
        };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);

    });
}

exports.updateAccess = function (event){    
    console.log("reached createUser in bot");
    var options = {
        method: 'PUT',
        url: 'https://iics-usersessions.herokuapp.com/api/bot/user/updateAccess',
        headers: 
        {
            'authorization-token': 'eyJhbGciOiJIUzI1NiJ9.c2FtcGxlVG9rZW4.F2vUteLfaWAK9iUKu1PRZnPS2r_HlhzU9NC8zeBN28Q',
            'content-type': 'application/json' 
        },
        qs:{
                client: "iics",                                
                fb_id: event.message.address.user.id,                                                                        
        },
        json: true
        };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);

    });
}


exports.createUserLiveChat = function (event, dep){
    var now = moment();        
    var time = now.tz('Asia/Taipei').format();

    if(dep == null){
        dep = "unset";
    }
    console.log("reached createUser in bot");
    var options = {
        method: 'POST',
        url: 'https://iics-usersessions.herokuapp.com/api/bot/user/createuser',
        headers: 
        {
            'authorization-token': 'eyJhbGciOiJIUzI1NiJ9.c2FtcGxlVG9rZW4.F2vUteLfaWAK9iUKu1PRZnPS2r_HlhzU9NC8zeBN28Q',
            'content-type': 'application/json' 
        },
        qs:{
                client: "iics",                
                user_name: event.message.user.name,
                fb_id: event.message.address.user.id,                             
                department: dep,
                subscription: true,                
                facAccess: false,
                onSupport: true,
                timestamp: time //new route?
        },
        json: true
        };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);

    });
}

module.exports.livechat = function (event){

    var options = {
        method: 'PUT',
        url: 'https://iics-usersessions.herokuapp.com/api/bot/user/updateuser',
        headers: 
        {
            'authorization-token': 'eyJhbGciOiJIUzI1NiJ9.c2FtcGxlVG9rZW4.F2vUteLfaWAK9iUKu1PRZnPS2r_HlhzU9NC8zeBN28Q',
            'content-type': 'application/json' 
        },
        qs:{
                client: "iics",                            
                fb_id: event.message.address.user.id,                                             
        },
        json: true
        };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);

    });
}