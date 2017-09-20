const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');

/**Parent Dialog - loans */
module.exports.main = [
    (session) => {
        // var cardNames = ['loans_card']
        // var msg = card(session, consts.menus.card, cardNames);
        
        // session.send(format(consts.prompts.LOAN_PROMPT, 'User'));
        // builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD);

        var cardName = card.getName(consts.card.loans_card);
        var msg = card(session, consts.card.loans_card, cardName);

        session.send(format(consts.prompts.LOAN_PROMPT, 'User'));
        builder.Prompts.choice(session, msg, card.choices(consts.card.loans_card));
    },
    (session, results) => {
        var choices = card.choices(consts.card.loans_card);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog('/Loans/Info');
            break;

            case choices[1]:
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
                // var cardName = ['loans_benefit_card']
                // var msg = card(session, consts.menus.card, cardName);

                // session.send(consts.prompts.LOAN_BENEFITS);
                // builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button); 

                var cardName = card.getName(consts.card.loans_benefit_card);
                var msg = card(session, consts.card.loans_benefit_card, cardName);
        
                session.send(consts.prompts.LOAN_BENEFITS);
                builder.Prompts.choice(session, msg, card.choices(consts.card.loans_benefit_card));
            break;

            case consts.choices.LEARN_LOANS[1]:
                // var cardName = ['loans_eligibility_card']
                // var msg = card(session, consts.menus.card, cardName);

                // session.send(consts.prompts.LOAN_ELIGIBITY);
                // builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button); 

                var cardName = card.getName(consts.card.loans_eligibility_card);
                var msg = card(session, consts.card.loans_eligibility_card, cardName);
        
                session.send(consts.prompts.LOAN_ELIGIBITY);
                builder.Prompts.choice(session, msg, card.choices(consts.card.loans_eligibility_card));
            break;

            case consts.choices.LEARN_LOANS[2]:
                // var cardName = ['loans_requirements_card']
                // var msg = card(session, consts.menus.card, cardName);

                // session.send(consts.prompts.LOAN_REQUIREMENTS);
                // builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);

                var cardName = card.getName(consts.card.loans_requirements_card);
                var msg = card(session, consts.card.loans_requirements_card, cardName);
        
                session.send(consts.prompts.LOAN_REQUIREMENTS);
                builder.Prompts.choice(session, msg, card.choices(consts.card.loans_requirements_card));
            break;
        }
    },
    (session, results) => {
        var choices = card.choices(consts.card.loans_card);
        
        if(results.response.entity == choices[choices.indexOf(results.response.entity)] || 'Back'){
            session.replaceDialog('/Loans/Info');
        }else{session.replaceDialog('/GetDetails/Loans');}
    }   
]