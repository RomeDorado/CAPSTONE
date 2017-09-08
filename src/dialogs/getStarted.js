const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');


module.exports =
[
    (session) => {
        var cardName = ['intro_card'];
        var msg = card(session, consts.menus.card, cardName)

        builder.Prompts.choice(session, msg, consts.choices.GET_STARTED);
    },
    (session, results, next) => {
        if(results.response.entity != 'Quit'){
            session.beginDialog('/Menu');
        }else{
            next();
        }
    },
    (session, results) => {
        session.endConversation('bye');
    }
]