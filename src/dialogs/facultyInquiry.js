const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const request = require('request');
const usersession = require('../helpers/usersession');

module.exports = [
    (session, args) => {        
        if (args == undefined){            
            builder.Prompts.text(session, consts.prompts.FACULTY_FIRST, { maxRetries:0,promptAfterAction:false});        
        }
        
        else {
        builder.Prompts.text(session, consts.prompts.FACULTY_SECOND, { maxRetries:0,promptAfterAction:false});
        }
    },
    (session, results) => {
        var email = results.response;

        var domain = email.split("@");

        if(domain[1] == "ust-ics.mygbiz.com"){            
            api.mailBoxLayer(email, (err, res) => {
                console.log(res, " res ");
                if (!err) {
                    if(res.smtp_check){                        
                        usersession.updateAccess(session)
                        session.endDialog(consts.prompts.VERIFIED_EMAIL);
                    }else{
                        session.send(consts.prompts.INVALID_EMAIL);
                        var cardName = card.getName(consts.menus.enter_email);
                        var msg = card(session, consts.menus.enter_email, cardName);                    
                        builder.Prompts.choice(session, msg, card.choices(consts.menus.enter_email), { maxRetries:0,promptAfterAction:false});
                    }
                }

            });
        }else{
            console.log("wrong email format")
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
                        session.replaceDialog('/FacultyInquiry', { reprompt: true });
                    break;

                    case choices[1]:
                    session.replaceDialog('/Menu');
                    break;
            }
        }
    }
]