const builder = require('botbuilder');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const format = require('string-format');

/**Parent Dialog - Credit Cards */
module.exports.main = [
    (session) => {
        var cardName = card.getName(consts.card.credit_card);
        var msg = card(session, consts.card.credit_card, cardName);

        builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
        console.log(msg);
    },
    (session, results) => {
        var choices = card.choices(consts.card.credit_card);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog('/CreditCards/Rewards');
            break;
            
            default:
                session.replaceDialog('/GetDetails');
            break;
        }
        
    }
]

/**Child Dialog -Credit Cards */
/**Rewards dialog */
module.exports.rewards = [
    (session) => {
        // builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_REWARDS, consts.styles.button); 
        var cardName = card.getName(consts.menus.credit_card);
        var msg = card(session, consts.menus.credit_card, cardName);

        session.send(format(consts.prompts.CITI_REWARDS, session.message.user.name));
        builder.Prompts.choice(session, msg, card.choices(consts.menus.credit_card));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.send("NAPUNTA REQUIREMENTS")
            break;

            case choices[1]:
                session.send("NAPUNTA INSTANT APPROVAL");
            break;

            case choices[2]:
                session.replaceDialog('/CreditCards');
            break;
            
            default:
                session.replaceDialog('/GetDetails');
            break;
        }

        
    },
    (session, results) => {
        var choices = card.choices(consts.card.credit_card);

        if(results.response.entity == choices[choices.indexOf(results.response.entity)]){
            session.replaceDialog('/CreditCards/Rewards');
        }else{session.replaceDialog('/GetDetails');}
    }   
]

/**Cash back dialog */
module.exports.cashBack = [
    (session) => {
        //builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_CASH, consts.styles.button);
        var cardName = card.getName(consts.menus.credit_card);
        var msg = card(session, consts.menus.credit_card, cardName);

        session.send(format(consts.prompts.CITI_CASHBACK, session.message.user.name));
        builder.Prompts.choice(session, msg, card.choices(consts.menus.credit_card));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.send("NAPUNTA REQUIREMENTS")
            break;

            case choices[1]:
                session.send("NAPUNTA INSTANT APPROVAL");
            break;

            case choices[2]:
                session.replaceDialog('/CreditCards');
            break;
            
            default:
                session.replaceDialog('/GetDetails');
            break;
        }
    },
    (session, results) => {
        var choices = card.choices(consts.card.credit_card);
        
        if(results.response.entity == choices[choices.indexOf(results.response.entity)]){
            session.replaceDialog('/CreditCards/CashBack');
        }else{session.replaceDialog('/GetDetails');}
    }   
]

/**Premier dialog */
module.exports.premier = [
    (session) => {
        // builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_PREMIER, consts.styles.button);
        var cardName = card.getName(consts.menus.credit_card);
        var msg = card(session, consts.menus.credit_card, cardName);

        session.send(format(consts.prompts.CITI_PREMIER, session.message.user.name));
        builder.Prompts.choice(session, msg, card.choices(consts.menus.credit_card));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.send("NAPUNTA REQUIREMENTS")
            break;

            case choices[1]:
                session.send("NAPUNTA INSTANT APPROVAL");
            break;

            case choices[2]:
                session.replaceDialog('/CreditCards');
            break;
            
            default:
                session.replaceDialog('/GetDetails');
            break;
        }
    },
    (session, results) => {
        var choices = card.choices(consts.card.credit_card);
        
        if(results.response.entity == choices[choices.indexOf(results.response.entity)]){
            session.replaceDialog('/CreditCards/Premier');
        }else{session.replaceDialog('/GetDetails');}
    }     
]

/**Shell dialog */
module.exports.shell = [
    (session) => {
        // builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_SHELL, consts.styles.button);
        var cardName = card.getName(consts.menus.credit_card);
        var msg = card(session, consts.menus.credit_card, cardName);

        session.send(format(consts.prompts.CITI_SHELL, session.message.user.name));
        builder.Prompts.choice(session, msg, card.choices(consts.menus.credit_card));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.send("NAPUNTA REQUIREMENTS")
            break;

            case choices[1]:
                session.send("NAPUNTA INSTANT APPROVAL");
            break;

            case choices[2]:
                session.replaceDialog('/CreditCards');
            break;
            
            default:
                session.replaceDialog('/GetDetails');
            break;
        }
    },
    (session, results) => {
        var choices = card.choices(consts.card.credit_card);
        
        if(results.response.entity == choices[choices.indexOf(results.response.entity)]){
            session.replaceDialog('/CreditCards/Shell');
        }else{session.replaceDialog('/GetDetails');}
    }     
]

/**Mercury Drug dialog */
module.exports.mercury = [
    (session) => {
        //builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_MD, consts.styles.button);
        var cardName = card.getName(consts.menus.credit_card);
        var msg = card(session, consts.menus.credit_card, cardName);

        session.send(format(consts.prompts.CITI_MERCURY, session.message.user.name));
        builder.Prompts.choice(session, msg, card.choices(consts.menus.credit_card));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.send("NAPUNTA REQUIREMENTS")
            break;

            case choices[1]:
                session.send("NAPUNTA INSTANT APPROVAL");
            break;

            case choices[2]:
                session.replaceDialog('/CreditCards');
            break;
            
            default:
                session.replaceDialog('/GetDetails');
            break;
        }
    },
    (session, results) => {
        var choices = card.choices(consts.card.credit_card);
        
        if(results.response.entity == choices[choices.indexOf(results.response.entity)]){
            session.replaceDialog('/CreditCards/Mercury');
        }else{session.replaceDialog('/GetDetails');}
    }      
]

module.exports.requirements = [
    (session) => {
        //builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_MD, consts.styles.button);
        var cardName = card.getName(consts.menus.requirements);
        var msg = card(session, consts.menus.requirements, cardName);

        builder.Prompts.choice(session, msg, card.choices(consts.menus.requirements));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.send("NAPUNTA REQUIREMENTS")
            break;

            case choices[1]:
                session.send("NAPUNTA INSTANT APPROVAL");
            break;

            case choices[2]:
                session.replaceDialog('/CreditCards');
            break;
            
            default:
                session.replaceDialog('/GetDetails');
            break;
        }
    },
    (session, results) => {
        var choices = card.choices(consts.card.credit_card);
        
        if(results.response.entity == choices[choices.indexOf(results.response.entity)]){
            session.replaceDialog('/CreditCards/Mercury');
        }else{session.replaceDialog('/GetDetails');}
    }      
]