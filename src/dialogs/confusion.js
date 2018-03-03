const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');
const request = require('request');


module.exports = [
    (session) => {        

        var cardName = card.getName(consts.menus.default_menu);
        var msg = card(session, consts.menus.default_menu, cardName);
        builder.Prompts.choice(session, msg, card.choices(consts.menus.default_menu), { maxRetries:0,promptAfterAction:false});
    },
    (session, results, callback) => {
        var choices = card.choices(consts.menus.default_menu);
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:
                    session.replaceDialog('/Ticket');
                break;

                case choices[1]:
                    session.replaceDialog('/Livechat');
                break;

                default:
                    session.replaceDialog('/')
                break;
            }
        }
    }
]
