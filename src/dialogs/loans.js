const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');

/**Parent Dialog - loans */
module.exports.main = [
    (session) => {
        var cardNames = ['loans_card']
        var msg = card(session, consts.menus.card, cardNames);
        
        session.send(format(consts.prompts.LOAN_PROMPT, 'User'));
        builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD);
    },
    (session, results) => {
        switch(results.response.entity){
            case consts.choices.CREDIT_CARD[5]:
                session.replaceDialog('/Loans/Info');
            break;

            case consts.choices.CREDIT_CARD[6]:
                session.replaceDialog('/GetDetails/Loans');
            break;


        }
    }
]

/**Child Dialog - loans */
module.exports.loanInfo = [
    (session, results) => {
        builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_LOANS, consts.styles.button);
    },
    (session, results) => {
        switch(results.response.entity){
            case consts.choices.LEARN_LOANS[0]:
                var cardName = ['loans_benefit_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.LOAN_BENEFITS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button); 
            break;

            case consts.choices.LEARN_LOANS[1]:
                var cardName = ['loans_eligibility_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.LOAN_ELIGIBITY);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button); 
            break;

            case consts.choices.LEARN_LOANS[2]:
                var cardName = ['loans_requirements_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.LOAN_REQUIREMENTS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
            break;
        }
    },
    (session, results) => {
        if(results.response.entity == consts.choices.CREDIT_CARD[5] || results.response.entity == consts.choices.CREDIT_CARD[7]){
            session.replaceDialog('/Loans/Info');
        }else{session.replaceDialog('/GetDetails/Loans');}
    }   
]