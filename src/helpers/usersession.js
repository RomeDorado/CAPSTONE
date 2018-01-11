var request = require('request');

exports.newMessageFromBot = function (params){
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

exports.createUserIfUnique = function (event, dep, docuAccess){
    if(docuAccess == (null || undefined)){
        docuAccess = false;
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
                docuAccess: docuAccess
        },
        json: true
        };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);

    });
}