const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');

module.exports =
[
    (session) => {
        var cardName = card.getName(consts.menus.menu);
        var msg = card(session, consts.menus.menu, cardName);
        
        builder.Prompts.choice(session, msg, card.choices(consts.menus.menu), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.menus.menu);
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:
                    session.replaceDialog('/About');
                break;
    
                case choices[1]:
                    session.replaceDialog('/Annoucements');
                break;                   
    
                default:
                    session.replaceDialog('/')
                break;
            }
        }
    }
]