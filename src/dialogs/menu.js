const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');

module.exports =
[
    (session) => {
        var cardName = ['ccl_card', 'usage_deals'];
        var msg = card(session, consts.menus.card, cardName);

        session.send(format(consts.prompts.GET_STARTED, 'User'));
        builder.Prompts.choice(session, msg, consts.choices.MENU);
    },
    (session, results) => {
        switch(results.response.entity){
            case consts.choices.MENU[0]:
                session.replaceDialog('/CreditCards');
            break;

            case consts.choices.MENU[1]:
                session.replaceDialog('/Loans');
            break;

            case consts.choices.MENU[3]:
                console.log('CLICK_FOR_CASH');
            break;
        }
    }
]