const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');
const request = require('request');

module.exports.main = [
    (session) => {
        api.userProfile(session.message.user.id, 'first_name', (err, res) => {
            if (!err) {
                session.send(format(consts.prompts.GET_STARTED, res.first_name));

                var cardName = card.getName(consts.menus.second_menu);
                var msg = card(session, consts.menus.second_menu, cardName);
                builder.Prompts.choice(session, msg, card.choices(consts.menus.second_menu), { maxRetries: 0, promptAfterAction: false });
            }
        });
    },
    (session, results) => {
        var choices = card.choices(consts.menus.second_menu);
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        if (results.response == null) {
            session.replaceDialog('/')
        } else {
            var reply = results.response.entity;
            switch (reply) {
                case choices[0]:
                    session.replaceDialog('/Menu');
                    break;

                case choices[1]:
                    session.replaceDialog('/UnsubConfirm');
                    break;
            }
        }
    }
]

module.exports.unsubconfirm = [

    (session) => {
        builder.Prompts.choice(session, consts.prompts.UNSUBSCRIBE, consts.choices.UNSUBSCRIBE, consts.styles.button);
    },
    (session, results) => {
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        if (results.response == null) {
            session.replaceDialog('/')
        } else {
            var reply = results.response.entity;
            switch (reply) {
                case "Proceed":
                    unsub(session.message.address.user.id);
                    session.send(consts.prompts.UNSUBSCRIBE_CONFIRMED);
                    session.send(consts.prompts.NOW_DONE);
                    session.replaceDialog('/Menu');
                    break;

                case "Back to Main Menu":
                    session.replaceDialog('/Menu');
                    break;
            }
        }
    }
]

function unsub(fb_id) {
    var options = {
        method: 'PUT',
        url: 'https://iics-usersessions.herokuapp.com/api/bot/user/unsub',
        headers:
            {
                'authorization-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                'content-type': 'application/json'
            },
        qs: {
            client: "iics",
            fb_id: fb_id
        },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

    });
}