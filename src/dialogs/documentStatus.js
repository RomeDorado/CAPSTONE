const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const request = require('request');
const usersession = require('../helpers/usersession');

module.exports = [
    (session) => {
        if (args && !args.reprompt) 
        builder.Prompts.text(session, consts.prompts.DOCU_FIRST);        
        else
        builder.Prompts.text(session, consts.prompts.DOCU_SECOND);
    },
    (session, results) => {
        var email = results.response;

        var domain = email.split("@");

        if(domain[1] == "ust-ics.mygbiz.com"){
            api.mailBoxLayer(email, (err, res) => {
                if (!err) {
                    if(res.smtp_check){
                        var documentAccess = true;
                        usersession.createUserIfUnique(session, undefined, documentAccess)
                    }else{
                        session.send(consts.prompts.INVALID_EMAIL);
                        var cardName = card.getName(consts.menus.enter_email);
                        var msg = card(session, consts.menus.enter_email, cardName);                    
                        builder.Prompts.choice(session, msg, card.choices(consts.menus.enter_email), { maxRetries:0,promptAfterAction:false});
                    }
                }

            });
        }else{
            session.send(consts.prompts.INVALID_EMAIL);
            var cardName = card.getName(consts.menus.enter_email);
            var msg = card(session, consts.menus.enter_email, cardName);                    
            builder.Prompts.choice(session, msg, card.choices(consts.menus.enter_email), { maxRetries:0,promptAfterAction:false});
        }
    },
    (session, results) => {
        var choices = card.choices(consts.menus.enter_email);
            if(results.response == null){
                session.replaceDialog('/')
            }else{
                var reply = results.response.entity;
                switch(reply){
                    case choices[0]:
                        session.replaceDialog('/DocumentStatus', { reprompt: true });
                    break;

                    case choices[1]:
                    session.replaceDialog('/Menu');
                    break;
            }
        }
    }
]