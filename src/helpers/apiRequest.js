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

        request(options, (err, httpRes, body) => {
            if (!err) {
                callback(null, JSON.parse(body));
            } else { callback(err, body) }
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

        request(options, (err, httpRes, body) => {
            if (!err) {
                callback(null, JSON.parse(body));
            } else { callback(err, body) }
        })
    }
/**END */

/**FB API */
module.exports.userProfile =
    (uid, fields, callback) => {
        var options = {
            url: format('https://graph.facebook.com/v2.6/{0}?fields={1}&access_token={2}', uid, fields, process.env.FB_ACCESS_TOKEN),
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
            if (err) console.log(err);
            !err ? callback(null, JSON.parse(body)) : callback(err, body);
        })
    }

//Check if user is in DB

module.exports.checkUser =
    (session, callback) => {
        var options = {
            method: 'GET',
            url: 'https://iics-usersessions.herokuapp.com/api/bot/user/getuser',
            headers:
                {
                    'API-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                    'content-type': 'application/json'
                },
            qs: {
                client: "iics",
                fb_id: session.message.address.user.id,
            },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            // console.log(body, "checkuser")
            callback(null, body);
        });
    }

module.exports.checkUserMW =
    (fbid, callback) => {
        var options = {
            method: 'GET',
            // url: 'https://iics-schedule-service.herokuapp.com/api/getRoom',
            url: 'https://iics-usersessions.herokuapp.com/api/bot/getAccess',
            headers:
                {
                    'API-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSE9nUFBrbTRBWE1tb3JYYklpSEFuM3oyYnBFbElvQnAiLCJkYXRhIjp7Il9pZCI6IjVhNzE0NTc3MGQ3MTY0MTg0NDhmODYwNCIsInVzZXJuYW1lIjoiYmVlcF9hZG1pbiIsImVtYWlsIjoibmVteUBjaGF0Ym90LnBoIiwiaXNfbG9naW4iOnRydWUsInBlcm1pc3Npb24iOiJhZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJOZW15IiwibGFzdCI6IlRvbGVudGlubyJ9fSwiZXhwaXJlSW4iOiIyNGgiLCJpYXQiOjE1MTg2NzY0Njl9.Ob_k32oWk8DFz0p3FKFD5MkYWHB_MlYAtHSSsqIWt0g',
                    'content-type': 'application/json'
                },
            qs: {
                client: "iics",
                id: fbid
            },
            body: {
                client: "iics",
                id: fbid
            },
            json: true
        };

        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            callback(null, body);
        });
    }

module.exports.checkAdmin =
    async (session) => {
        var time = moment().add(5, 'minutes').startOf('minute');
        // var time = now;
        var options = {
            method: 'POST',
            url: 'https://iics-usersessions.herokuapp.com/api/bot/startLive',
            headers:
                {
                    'API-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                    'content-type': 'application/json'
                },
            qr: {
                client: "iics"
            },
            body: {
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
    async (session, email) => {

        var time = moment().add(8, 'hours');
        if (!email) {
            email = "None"
        }
        var options = {
            method: 'POST',
            url: 'https://iics-usersessions.herokuapp.com/api/bot/profanity',
            headers:
                {
                    'API-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                    'content-type': 'application/json'
                },
            qr: {
                client: "iics"
            },
            body: {
                client: "iics",
                name: session.message.address.user.name,
                fb_id: session.message.address.user.id,
                timestamp: time,
                email: email,
                message: session.message.text //new route?
            },
            json: true
        };

        request(options, async function (error, response, body) {
            if (error) throw new Error(error);
            // console.log(response)
        });
    }

module.exports.checkEmail =
    async (session, email, callback) => {
        console.log("im here")
        console.log(email)
        var options = {
            method: 'GET',
            url: 'https://iics-user-service.herokuapp.com/api/access',
            headers:
                {
                    'API-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                    'content-type': 'application/json'
                },
            qs: {
                client: "iics",
                email: email
            },
            body: {
                client: "iics",
                email: email
            },
            json: true
        };

        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            callback(null, body);
        });
    }

module.exports.getDocuStatus =
    async (code, callback) => {
        var options = {
            method: 'GET',
            url: 'http://93667f13.ngrok.io/api/getStatus',
            headers:
                {
                    'API-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                    'content-type': 'application/json'
                },
            qs: {
                refNo: code,
            },
            json: true
        };

        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            callback(null, body);
        });


    }


module.exports.nextClass =
    async (session, firstname, professor, datetime, callback) => {
        var options = {
            method: 'GET',
            // url: 'https://iics-schedule-service.herokuapp.com/api/getNextClass',
            url: 'https://ea55cc76.ngrok.io/api/getNextClass',
            headers:
                {
                    'API-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                    'content-type': 'application/json'
                },
            qs: {
                client: "iics",
                firstname: firstname,
                professor: professor,
                day: datetime,
            },
            body: {
                client: "iics",
                firstname: firstname,
                professor: professor,
                day: datetime,
            },
            json: true
        };

        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            callback(null, body);
        });
    }

module.exports.room =
    async (session, firstname, professor, datetime, callback) => {
        var options = {
            method: 'GET',
            // url: 'https://iics-schedule-service.herokuapp.com/api/getRoom',
            url: 'https://ea55cc76.ngrok.io/api/getRoom',
            headers:
                {
                    'API-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                    'content-type': 'application/json'
                },
            qs: {
                client: "iics",
                firstname: firstname,
                professor: professor,
                day: datetime
            },
            body: {
                client: "iics",
                firstname: firstname,
                professor: professor,
                day: datetime
            },
            json: true
        };

        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            callback(null, body);
        });
    }

module.exports.currentClass =
    async (session, firstname, professor, datetime, callback) => {
        var options = {
            method: 'GET',
            // url: 'https://iics-schedule-service.herokuapp.com/api/getRoom',
            url: 'https://ea55cc76.ngrok.io/api/getCurrentClass',
            headers:
                {
                    'API-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                    'content-type': 'application/json'
                },
            qs: {
                client: "iics",
                firstname: firstname,
                professor: professor,
                day: datetime
            },
            body: {
                client: "iics",
                firstname: firstname,
                professor: professor,
                day: datetime
            },
            json: true
        };

        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            callback(null, body);
        });
    }

module.exports.subjectTime =
    async (session, firstname, professor, datetime, section, subject, callback) => {
        var options = {
            method: 'GET',
            // url: 'https://iics-schedule-service.herokuapp.com/api/getRoom',
            url: 'https://ea55cc76.ngrok.io/api/getSubjectTime',
            headers:
                {
                    'API-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                    'content-type': 'application/json'
                },
            qs: {
                client: "iics",
                firstname: firstname,
                professor: professor,
                day: datetime,
                section: section,
                subject: subject
            },
            body: {
                client: "iics",
                firstname: firstname,
                professor: professor,
                day: datetime,
                section: section,
                subject: subject
            },
            json: true
        };

        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            callback(null, body);
        });
    }

module.exports.subjectDay =
    async (session, firstname, professor, datetime, section, subject, callback) => {
        var options = {
            method: 'GET',
            // url: 'https://iics-schedule-service.herokuapp.com/api/getRoom',
            url: 'https://ea55cc76.ngrok.io/api/getSubjectTimeWhen',
            headers:
                {
                    'API-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                    'content-type': 'application/json'
                },
            qs: {
                client: "iics",
                firstname: firstname,
                professor: professor,
                day: datetime,
                section: section,
                subject: subject
            },
            body: {
                client: "iics",
                firstname: firstname,
                professor: professor,
                day: datetime,
                section: section,
                subject: subject
            },
            json: true
        };

        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            callback(null, body);
        });


    }

module.exports.access =
    async (session, callback) => {
        var options = {
            method: 'GET',
            // url: 'https://iics-schedule-service.herokuapp.com/api/getRoom',
            url: 'https://iics-usersessions.herokuapp.com/api/bot/getAccess',
            headers:
                {
                    'API-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSE9nUFBrbTRBWE1tb3JYYklpSEFuM3oyYnBFbElvQnAiLCJkYXRhIjp7Il9pZCI6IjVhNzE0NTc3MGQ3MTY0MTg0NDhmODYwNCIsInVzZXJuYW1lIjoiYmVlcF9hZG1pbiIsImVtYWlsIjoibmVteUBjaGF0Ym90LnBoIiwiaXNfbG9naW4iOnRydWUsInBlcm1pc3Npb24iOiJhZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJOZW15IiwibGFzdCI6IlRvbGVudGlubyJ9fSwiZXhwaXJlSW4iOiIyNGgiLCJpYXQiOjE1MTg2NzY0Njl9.Ob_k32oWk8DFz0p3FKFD5MkYWHB_MlYAtHSSsqIWt0g',
                    'content-type': 'application/json'
                },
            qs: {
                client: "iics",
                id: session.message.address.user.id
            },
            body: {
                client: "iics",
                id: session.message.address.user.id
            },
            json: true
        };

        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            callback(null, body);
        });


    }
/**END */



