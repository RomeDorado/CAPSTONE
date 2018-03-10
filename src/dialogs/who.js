const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');
const request = require('request');


module.exports.I =
    [
        (session) => {

            api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                if (!err) {
                    session.endConversation(format(consts.prompts.WHO, res.first_name));
                }
            });
        }
    ]

module.exports.YOU =
    [
        (session) => {
            var replies = consts.prompts.WHO_YOU
            var random = replies[Math.floor(Math.random() * replies.length)];
            session.endConversation(random)
        }
    ]