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
                session.replaceDialog('/Loans/Requirements');
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
        
        api.userProfile(session.message.user.id, 'first_name', (err, res) => {
            if (!err) {
                session.send(format(consts.prompts.DEC_TEXT, res.first_name));
            }
        });
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
        }
    }   
]

module.exports.loanRequirements = [
    (session) => {
        var cardName = card.getName(consts.menus.requirements_1);
        var msg = card(session, consts.menus.requirements_1, cardName);        
        
        
        builder.Prompts.choice(session, msg, card.choices(consts.menus.requirements_1));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.requirements_1);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){

            case choices[0]:
                var cardName = card.getName(consts.menus.instant_approval);
                var msg = card(session, consts.menus.instant_approval, cardName);
                session.send(consts.prompts.LOAN_EMPLOYED);
                session.send(consts.prompts.LOAN_ELIGIBITY);        
                
                builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval));
            break;

            case choices[1]:
                var cardName = card.getName(consts.menus.instant_approval);
                var msg = card(session, consts.menus.instant_approval, cardName);
                session.send(consts.prompts.LOAN_SELF_EMPLOYED);
                session.send(consts.prompts.LOAN_ELIGIBITY);

                builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval));
            break;
            
            default:
                session.replaceDialog('/GetDetails');
            break;
        }
    },
    (session, results) => {
        var choices = card.choices(consts.menus.instant_approval);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                    if (!err) {
                        session.send(format(consts.prompts.INSTANT_APPROVAL_YES, res.first_name));
                    }
                });

                var cardName = card.getName(consts.menus.loan_accepted);
                var msg = card(session, consts.menus.loan_accepted, cardName);
                builder.Prompts.choice(session, msg, card.choices(consts.menus.loan_accepted));
            break;

            case choices[1]:
                api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                    if (!err) {
                        session.send(format(consts.prompts.INSTANT_APPROVAL_NO, res.first_name));
                    }
                });
            
                var cardName = card.getName(consts.menus.loan_denied);
                var msg = card(session, consts.menus.loan_denied, cardName);
                builder.Prompts.choice(session, msg, card.choices(consts.menus.loan_denied));
            break;
        }
    },
    (session, results) => {
        var choices = card.choices(consts.menus.loan_denied);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog('/Menu');
            break;
        }
    }
]