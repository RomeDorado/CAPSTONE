const FB_PAGE_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
const request = require('request');



module.exports =
    [
        (session) => {
            var fburl = `https://graph.facebook.com/v2.6/${session.message.sourceEvent.sender.id}/?fields=first_name,gender,last_name,locale,timezone&access_token=${FB_PAGE_ACCESS_TOKEN}`;
            console.log(fburl);
            request({
                url: fburl, method: 'GET', headers: { 'Content-Type': 'application/json' }
            },
                function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        console.log(body);

                        session.userData.user == {};
                        session.userData.user.first_name = body.first_name;
                        session.userData.user.gender = body.gender;
                        session.userData.user.last_name = body.last_name;
                    }
                })
        }

    ]