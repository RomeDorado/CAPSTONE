const builder = require('botbuilder');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');

/**Parent Dialog - Credit Cards */
module.exports.main = [
    (session) => {
        var cardName = card.getName(consts.card.credit_card);
        var msg = card(session, consts.card.credit_card, cardName);

        builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
    },
    (session, results) => {
        var choices = card.choices(consts.card.credit_card);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog('/CreditCards/Rewards');
            break;

            case choices[2]:
                session.replaceDialog('/CreditCards/CashBack');
            break;

            case choices[4]:
                session.replaceDialog('/CreditCards/Premier');
            break;

            case choices[6]:
                session.replaceDialog('/CreditCards/Shell');
            break;

            case choices[8]:
                session.replaceDialog('/CreditCards/Mercury');
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
        builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_REWARDS, consts.styles.button); 
    },
    (session, results) => {
        switch(results.response.entity){
            case consts.choices.LEARN_REWARDS[0]:
                var cardName = card.getName(consts.card.rewards_benefit_card);
                var msg = card(session, consts.card.rewards_benefit_card, cardName);
        
                session.send(consts.prompts.REWARD_BENEFITS);
                builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
            break;

            case consts.choices.LEARN_REWARDS[1]:
                var cardName = card.getName(consts.card.rewards_eligibility_requirements_card);
                var msg = card(session, consts.card.rewards_eligibility_requirements_card, cardName);
        
                session.send(consts.prompts.ELIGIBILITY);
                builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
            break;

            case consts.choices.LEARN_REWARDS[2]:
                var cardName = card.getName(consts.card.rewards_eligibility_requirements_card);
                var msg = card(session, consts.card.rewards_eligibility_requirements_card, cardName);
        
                session.send(consts.prompts.REQUIREMENTS);
                builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
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
        builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_CASH, consts.styles.button);
    },
    (session, results) => {
        switch(results.response.entity){
            case consts.choices.LEARN_CASH[0]:
                // var cardName = ['cash_benefit_card']
                // var msg = card(session, consts.menus.card, cardName);

                // session.send(consts.prompts.CASH_BENEFITS);
                // builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button); 

                var cardName = card.getName(consts.card.cash_benefit_card);
                var msg = card(session, consts.card.cash_benefit_card, cardName);
        
                session.send(consts.prompts.CASH_BENEFITS);
                builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
            break;

            case consts.choices.LEARN_CASH[1]:
                // var cardName = ['cash_eligibility_requirements_card']
                // var msg = card(session, consts.menus.card, cardName);

                // session.send(consts.prompts.ELIGIBILITY);
                // builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                
                var cardName = card.getName(consts.card.cash_eligibility_requirements_card);
                var msg = card(session, consts.card.cash_eligibility_requirements_card, cardName);
        
                session.send(consts.prompts.ELIGIBILITY);
                builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
            break;

            case consts.choices.LEARN_CASH[2]:
                // var cardName = ['cash_eligibility_requirements_card']
                // var msg = card(session, consts.menus.card, cardName);

                // session.send(consts.prompts.REQUIREMENTS);
                // builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);

                var cardName = card.getName(consts.card.cash_eligibility_requirements_card);
                var msg = card(session, consts.card.cash_eligibility_requirements_card, cardName);
        
                session.send(consts.prompts.REQUIREMENTS);
                builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
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
        builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_PREMIER, consts.styles.button);
    },
    (session, results) => {
        switch(results.response.entity){
            case consts.choices.LEARN_PREMIER[0]:

                var cardName = card.getName(consts.card.premier_benefit_card);
                var msg = card(session, consts.card.premier_benefit_card, cardName);
        
                session.send(consts.prompts.PREMIER_BENEFITS);
                builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
            break;

            case consts.choices.LEARN_PREMIER[1]:
                
                var cardName = card.getName(consts.card.premier_eligibility_requirements_card);
                var msg = card(session, consts.card.premier_eligibility_requirements_card, cardName);
        
                session.send(consts.prompts.ELIGIBILITY);
                builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
            break;

            case consts.choices.LEARN_PREMIER[2]:

                var cardName = card.getName(consts.card.premier_eligibility_requirements_card);
                var msg = card(session, consts.card.premier_eligibility_requirements_card, cardName);
        
                session.send(consts.prompts.REQUIREMENTS);
                builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));                
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
        builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_SHELL, consts.styles.button);
    },
    (session, results) => {
        switch(results.response.entity){
            case consts.choices.LEARN_SHELL[0]: 

                var cardName = card.getName(consts.card.shell_benefit_card);
                var msg = card(session, consts.card.shell_benefit_card, cardName);
        
                session.send(consts.prompts.SHELL_BENEFITS);
                builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
            break;

            case consts.choices.LEARN_SHELL[1]:

                var cardName = card.getName(consts.card.shell_eligibility_requirements_card);
                var msg = card(session, consts.card.shell_benefit_card, cardName);
        
                session.send(consts.prompts.ELIGIBILITY);
                builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
            break;

            case consts.choices.LEARN_SHELL[2]:

                var cardName = card.getName(consts.card.shell_eligibility_requirements_card);
                var msg = card(session, consts.card.shell_benefit_card, cardName);
        
                session.send(consts.prompts.REQUIREMENTS);
                builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
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
        builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_MD, consts.styles.button);
    },
    (session, results) => {
        switch(results.response.entity){
            case consts.choices.LEARN_MD[0]:

                var cardName = card.getName(consts.card.mercury_benefit_card);
                var msg = card(session, consts.card.mercury_benefit_card, cardName);
        
                session.send(consts.prompts.MD_BENEFITS);
                builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
            break;

            case consts.choices.LEARN_MD[1]:

                var cardName = card.getName(consts.card.mercury_eligibility_requirements_card);
                var msg = card(session, consts.card.mercury_eligibility_requirements_card, cardName);
        
                session.send(consts.prompts.ELIGIBILITY);
                builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
            break;

            case consts.choices.LEARN_MD[2]:

                var cardName = card.getName(consts.card.mercury_eligibility_requirements_card);
                var msg = card(session, consts.card.mercury_eligibility_requirements_card, cardName);
        
                session.send(consts.prompts.REQUIREMENTS);
                builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card));
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