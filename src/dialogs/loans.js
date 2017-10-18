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
        
        session.send(consts.prompts.LOAN_PROMPT);
        session.send(consts.prompts.LOAN_BENEFITS);
        builder.Prompts.choice(session, msg, card.choices(consts.card.loans_card));
    },
    (session, results) => {
        var choices = card.choices(consts.card.loans_card);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog('/Loans/Info');
            break;

            case choices[1]:
                session.replaceDialog('/Menu');
            break;
        }
    }
]

/**Child Dialog - loans */
module.exports.loanInfo = [    
    (session) => {

        var cardName = card.getName(consts.card.loans_req);
        var msg = card(session, consts.card.loans_req, cardName);        
        
        session.send(consts.prompts.BEFORE_PROCEED);        
        session.send(consts.prompts.BEFORE_PROCEED_REQ);
        builder.Prompts.choice(session, msg, card.choices(consts.card.loans_req));
    },
    (session, results) => {
        var choices = card.choices(consts.card.loans_req);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog('/Loans/Accept');
            break;

            case choices[1]:
                session.replaceDialog('/Loans/Decline');
            break;
        }
    }   
]

module.exports.loanDecline = [
    (session) => {

        var cardName = card.getName(consts.card.loans_dec);
        var msg = card(session, consts.card.loans_dec, cardName);        
                        
        session.send(format(consts.prompts.DEC_TEXT, session.message.user.name));
        builder.Prompts.choice(session, msg, card.choices(consts.card.loans_dec));
    },
    (session, results) => {
        var choices = card.choices(consts.card.loans_dec);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog('/Menu');
            break;
        }
    }   
]

module.exports.loanAccept = [    
    (session) => {

        var cardName = card.getName(consts.card.loans_acc);
        var msg = card(session, consts.card.loans_acc, cardName);        
        
        session.send(consts.prompts.ACC_TEXT);                
        builder.Prompts.choice(session, msg, card.choices(consts.card.loans_acc));
    },
    (session, results) => {
        var choices = card.choices(consts.card.loans_acc);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog('/Menu');
            break;

            case choices[1]:
                session.replaceDialog('/Menu');
            break;
        }
    }   
]