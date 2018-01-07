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
                builder.Prompts.choice(session, msg, card.choices(consts.menus.second_menu), { maxRetries:0,promptAfterAction:false});
            }
        });
    },
    (session,results) =>{
        var choices = card.choices(consts.menus.second_menu);
                if(results.response == null){
                    session.replaceDialog('/')
                }else{
                    var reply = results.response.entity;
                    switch(reply){
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
            if(results.response == null){
                session.replaceDialog('/')
            }else{
                var reply = results.response.entity;
                switch(reply){
                    case "Proceed":
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