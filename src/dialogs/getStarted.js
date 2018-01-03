const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');



module.exports =
    [
        (session) => {
            api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                if (!err) {
                    session.send(format(consts.prompts.GET_STARTED, res.first_name));

                    var cardName = card.getName(consts.menus.first_menu);
                    var msg = card(session, consts.menus.first_menu, cardName);                    
                    builder.Prompts.choice(session, msg, card.choices(consts.menus.first_menu), { maxRetries:0,promptAfterAction:false});
                }
            });
        },
        (session, results) => {
            var choices = card.choices(consts.menus.first_menu);
            if(results.response == null){
                session.replaceDialog('/')
            }else{
                var reply = results.response.entity;
                switch(reply){
                    case choices[0]:
                        session.replaceDialog('/Menu');
                    break;

                    case choices[1]:
                    session.replaceDialog('/Subscribe');
                    break;
                }
            }
        }
    ]