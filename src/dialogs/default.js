const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');

module.exports = 
[
    (session) => {
        api.userProfile(session.message.user.id, 'first_name', (err, res) => {
            if (!err) {
                session.send(format(consts.prompts.CONFUSION_TRIGGER, res.first_name));
            }
        });
        var cardName = card.getName(consts.menus.confusion_trigger);
        var msg = card(session, consts.menus.confusion_trigger, cardName);
        builder.Prompts.choice(session, msg, card.choices(consts.menus.confusion_trigger), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.menus.confusion_trigger);
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                default:
                    session.replaceDialog('/');
                break;
            }
        }
    }
]