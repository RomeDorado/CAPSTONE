const builder = require('botbuilder');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');

/**Parent Dialog - Credit Cards */
module.exports.main = [
    (session) => {
        session.send(consts.prompts.USAGEDEALS_PROMPT);

        var cardName = ['dining_priv', 'travel_priv', 'online_priv', 'paylite_priv', 'onebill_priv','citiworld_priv'];
        var msg = card(session, consts.menus.card, cardName);

        builder.Prompts.choice(session, msg, consts.choices.USAGE_DEALS);
    },
    (session, results) => {
        switch (results.response.entity) {
            case consts.choices.CREDIT_CARD[0]:
                session.replaceDialog('/CreditCards/Rewards');
                break;

            case consts.choices.CREDIT_CARD[1]:
                session.replaceDialog('/CreditCards/CashBack');
                break;

            case consts.choices.CREDIT_CARD[2]:
                session.replaceDialog('/CreditCards/Premier');
                break;

            case consts.choices.CREDIT_CARD[3]:
                session.replaceDialog('/CreditCards/Shell');
                break;

            case consts.choices.CREDIT_CARD[4]:
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
        switch (results.response.entity) {
            case consts.choices.LEARN_REWARDS[0]:
                var cardName = ['rewards_benefit_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.REWARD_BENEFITS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;

            case consts.choices.LEARN_REWARDS[1]:
                var cardName = ['rewards_eligibility_requirements_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.ELIGIBILITY);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;

            case consts.choices.LEARN_REWARDS[2]:
                var cardName = ['rewards_eligibility_requirements_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.REQUIREMENTS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;
        }


    },
    (session, results) => {
        console.log(results);
        if (results.response.entity == consts.choices.CREDIT_CARD[6] || results.response.entity == consts.choices.CREDIT_CARD[0]) {
            session.replaceDialog('/CreditCards/Rewards');
        } else { session.replaceDialog('/GetDetails'); }
    }
]

/**Cash back dialog */
module.exports.cashBack = [
    (session) => {
        builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_CASH, consts.styles.button);
    },
    (session, results) => {
        switch (results.response.entity) {
            case consts.choices.LEARN_CASH[0]:
                var cardName = ['cash_benefit_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.CASH_BENEFITS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;

            case consts.choices.LEARN_CASH[1]:
                var cardName = ['cash_eligibility_requirements_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.ELIGIBILITY);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;

            case consts.choices.LEARN_CASH[2]:
                var cardName = ['cash_eligibility_requirements_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.REQUIREMENTS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;
        }
    },
    (session, results) => {
        if (results.response.entity == consts.choices.CREDIT_CARD[1]) {
            session.replaceDialog('/CreditCards/CashBack');
        } else { session.replaceDialog('/GetDetails'); }
    }
]

/**Premier dialog */
module.exports.premier = [
    (session) => {
        builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_PREMIER, consts.styles.button);
    },
    (session, results) => {
        switch (results.response.entity) {
            case consts.choices.LEARN_PREMIER[0]:
                var cardName = ['premier_benefit_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.PREMIER_BENEFITS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;

            case consts.choices.LEARN_PREMIER[1]:
                var cardName = ['premier_eligibility_requirements_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.ELIGIBILITY);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;

            case consts.choices.LEARN_PREMIER[2]:
                var cardName = ['premier_eligibility_requirements_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.REQUIREMENTS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;
        }
    },
    (session, results) => {
        if (results.response.entity == consts.choices.CREDIT_CARD[2]) {
            session.replaceDialog('/CreditCards/Premier');
        } else { session.replaceDialog('/GetDetails'); }
    }
]

/**Shell dialog */
module.exports.shell = [
    (session) => {
        builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_SHELL, consts.styles.button);
    },
    (session, results) => {
        switch (results.response.entity) {
            case consts.choices.LEARN_SHELL[0]:
                var cardName = ['shell_benefit_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.SHELL_BENEFITS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;

            case consts.choices.LEARN_SHELL[1]:
                var cardName = ['shell_eligibility_requirements_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.ELIGIBILITY);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;

            case consts.choices.LEARN_SHELL[2]:
                var cardName = ['shell_eligibility_requirements_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.REQUIREMENTS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;
        }
    },
    (session, results) => {
        if (results.response.entity == consts.choices.CREDIT_CARD[3]) {
            session.replaceDialog('/CreditCards/Shell');
        } else { session.replaceDialog('/GetDetails'); }
    }
]

/**Mercury Drug dialog */
module.exports.mercury = [
    (session) => {
        builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_MD, consts.styles.button);
    },
    (session, results) => {
        switch (results.response.entity) {
            case consts.choices.LEARN_MD[0]:
                var cardName = ['mercury_benefit_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.MD_BENEFITS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;

            case consts.choices.LEARN_MD[1]:
                var cardName = ['mercury_eligibility_requirements_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.ELIGIBILITY);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;

            case consts.choices.LEARN_MD[2]:
                var cardName = ['mercury_eligibility_requirements_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.REQUIREMENTS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;
        }
    },
    (session, results) => {
        if (results.response.entity == consts.choices.CREDIT_CARD[4]) {
            session.replaceDialog('/CreditCards/Mercury');
        } else { session.replaceDialog('/GetDetails'); }
    }
]