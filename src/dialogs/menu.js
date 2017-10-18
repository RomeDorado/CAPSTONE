const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');

module.exports =
[
    (session) => {
        var cardName = card.getName(consts.menus.menu);
        var msg = card(session, consts.menus.menu, cardName);

        // session.send(consts.prompts.MENU);
        builder.Prompts.choice(session, msg, card.choices(consts.menus.menu));
    },
    (session, results) => {
        var choices = card.choices(consts.card.menu);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog('/CreditCards');
            break;

            case choices[1]:
                session.replaceDialog('/Loans');
            break;

            case choices[2]:
                session.replaceDialog('/UsageDeals');
            break;
        }
    }
]