var request = require('request');
const moment = require('moment-timezone');
const api = require('./apiRequest')
var now = moment();
var time = now.tz('Asia/Taipei').format();

exports.newMessageFromBot = function (params) {
    console.log("new message from bot")
    api.checkUserMW(params.fb_id, (err, res) => {
        // console.log(res)
        if (res.d.access) {
            console.log("reached newMessage in bot");
            var options = {
                method: 'PUT',
                url: 'https://iics-usersessions.herokuapp.com/api/bot/session/updatesessionbot',
                headers:
                    {
                        'authorization-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                        'content-type': 'application/json'
                    },
                qs: {
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

exports.createUserIfUnique = function (event, dep, email) {
    if (dep == null) {
        dep = "unset";
    }
    console.log("reached createUser in bot");
    var options = {
        method: 'POST',
        url: 'https://iics-usersessions.herokuapp.com/api/bot/user/createuser',
        headers:
            {
                'authorization-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                'content-type': 'application/json'
            },
        qs: {
            client: "iics",
            user_name: event.message.user.name,
            fb_id: event.message.address.user.id,
            department: dep,
            subscription: true,
            email: email,
            facAccess: true,//because subscribed and verified
            onSupport: false
        },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

    });
}

exports.createUserNoSub = async function (event, dep, email) {
    return new Promise((resolve, reject) => {
        // if(dep == null){
        //     dep = "unset";
        // }
        console.log("reached createUser in bot");
        var options = {
            method: 'POST',
            url: 'https://iics-usersessions.herokuapp.com/api/bot/user/createuser',
            headers:
                {
                    'authorization-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                    'content-type': 'application/json'
                },
            qs: {
                client: "iics",
                user_name: event.message.user.name,
                fb_id: event.message.address.user.id,
                department: dep,
                subscription: false,
                email: email,
                facAccess: false,
                onSupport: false
            },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) reject(error);;
            resolve(response);
        });
    });
}

exports.updateAccess = function (event) {
    console.log("reached createUser in bot");
    var options = {
        method: 'PUT',
        url: 'https://iics-usersessions.herokuapp.com/api/bot/user/updateAccess',
        headers:
            {
                'authorization-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                'content-type': 'application/json'
            },
        qs: {
            client: "iics",
            fb_id: event.message.address.user.id,
        },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

    });
}


exports.createUserLiveChat = function (event, dep) {


    if (dep == null) {
        dep = "unset";
    }
    console.log("reached createUser in bot");
    var options = {
        method: 'POST',
        url: 'https://iics-usersessions.herokuapp.com/api/bot/user/createuser',
        headers:
            {
                'authorization-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                'content-type': 'application/json'
            },
        qs: {
            client: "iics",
            user_name: event.message.user.name,
            fb_id: event.message.address.user.id,
            department: dep,
            subscription: false,
            email: "unset",
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

module.exports.livechat = function (event) {

    var options = {
        method: 'PUT',
        url: 'https://iics-usersessions.herokuapp.com/api/bot/user/updateuser',
        headers:
            {
                'authorization-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                'content-type': 'application/json'
            },
        qs: {
            client: "iics",
            fb_id: event.message.address.user.id,
        },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

    });
}