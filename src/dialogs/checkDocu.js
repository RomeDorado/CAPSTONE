const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const request = require('request');
const usersession = require('../helpers/usersession');


module.exports = [
    (session) => {
        builder.Prompts.text(session, consts.prompts.CHECK_DOCUMENT, { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var code = results.response;
        api.getDocuStatus(code, (err, res) => {
            if(res.success){
                if (typeof res.data[0] == 'undefined'){
                    session.send(consts.prompts.NO_DOCU);                    
                    var cardName = card.getName(consts.menus.enter_code);
                    var msg = card(session, consts.menus.enter_code, cardName);
                    builder.Prompts.choice(session, msg, card.choices(consts.menus.enter_code), { maxRetries:0,promptAfterAction:false});
                }else{
                    console.log(res.data, "Aaa")
                    session.endConversation("Your document status is: " + res.data[0].status);
                }
                
            }else{
                session.endConversation(res.data)
            }
            
        })
    },
    (session, results) => {
        console.log(results)
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        var choices = card.choices(consts.menus.enter_code);
            if(results.response == null){
                session.replaceDialog('/')
            }else{
                var reply = results.response.entity;
                switch(reply){
                    case choices[0]:
                        session.replaceDialog('/Documents', { reprompt: true });
                    break;

                    case choices[1]:
                    session.replaceDialog('/Menu');
                    break;
            }
        }
    }
]
