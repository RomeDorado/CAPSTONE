const builder = require('botbuilder');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const quickReplies = require('botbuilder-quickreplies');
const bot = new builder.UniversalBot(connector);
/**Parent Dialog - Credit Cards */
module.exports.main = [
    (session) => {
        var cardName = card.getName(consts.card.usage_deals);
        var msg = card(session, consts.card.usage_deals, cardName);

        session.send(consts.prompts.USAGEDEALS_PROMPT);
        builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals));
    },
    (session, results) => {
        var choices = card.choices(consts.card.usage_deals);

        switch (results.response.entity) {
            case choices[0]:
                session.replaceDialog('/UsageDeals/Dining');
            break;

            case consts.choices.USAGE_DEALS[1]:
                session.replaceDialog('/UsageDeals/Travel');
            break;

            case consts.choices.USAGE_DEALS[2]:
                session.replaceDialog('/UsageDeals/Online');
            break;

            // case consts.choices.USAGE_DEALS[3]:
            //     session.replaceDialog('/UsageDeals/Installments');
            // break;

            // case consts.choices.CREDIT_CARD[4]:
            //     session.replaceDialog('/UsageDeals/Bill');
            // break;

            // case consts.choices.CREDIT_CARD[6]:
            //     session.replaceDialog('/UsageDeals/World');
            break;
        }

    }
]

/**Child Dialog - Usage Deals */
/**Dining dialog */
module.exports.dining = [
    (session) => {
        // Create a message with some text.
        var message = new builder.Message(session).text('Some text');
        quickReplies.LocationPrompt.create(bot);
        // Add some quick replies.
        message = quickReplies.AddQuickReplies(session, message, [
        new quickReplies.LocationPrompt.beginDialog(session),
        new quickReplies.QuickReplyText(session, 'This is my title', 'This is my message'),
        new quickReplies.QuickReplyText(session, 'This is another title', 'This is other message', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Button_Icon_Blue.svg/768px-Button_Icon_Blue.svg.png') // with optional image
        ]);

        // Send the message.
        session.send(message);
    },
    (session, results) => {
        var location = args.response.entity;
        session.send(`Your location is : ${location.title}, Longitude: ${location.coordinates.long}, Latitude: ${location.coordinates.lat}`);
                
    }
]

/**Travel dialog */
module.exports.travel = [
    (session) => {
        var cardName = card.getName(consts.card.usage_deals_travel)
        var msg = card(session, consts.card.usage_deals_travel, cardName);

        session.send(consts.prompts.TRAVEL_PROMPT);
        builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_travel));
    },
    (session, results) => {
        var choices = card.choices(consts.card.usage_deals_travel);
        
        switch (results.response.entity) {
            case choices[0]:
                var cardName = card.getName(consts.card.pal)
                var msg = card(session, consts.card.pal, cardName);

                session.send(consts.prompts.PAL_PROMPT);
                builder.Prompts.text(session, msg)
            break;

            case choices[1]:
                var cardName = card.getName(consts.card.nike)
                var msg = card(session, consts.card.nike, cardName);

                session.send(consts.prompts.NIKE_PROMPT);
                builder.Prompts.text(session, msg)
            break;

            case choices[2]:
                var cardName = card.getName(consts.card.cathay)
                var msg = card(session, consts.card.cathay, cardName);

                session.send(consts.prompts.CATHAY_PROMPT);
                builder.Prompts.text(session, msg)
            break;
        }
    }
]

/**Online dialog */
module.exports.online = [
    (session) => {
        var cardName = card.getName(consts.card.usage_deals_online)
        var msg = card(session, consts.card.usage_deals_online, cardName);

        session.send(consts.prompts.TRAVEL_PROMPT);
        builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_online));
    },
    (session, results) => {
        var choices = card.choices(consts.card.usage_deals_online);
        
        switch (results.response.entity) {
            case choices[0]:
                var cardName = card.getName(consts.card.love2click)
                var msg = card(session, consts.card.love2click, cardName);

                session.send(consts.prompts.LOVE2CLICK_PROMPT);
                builder.Prompts.text(session, msg)
            break;

            case choices[1]:
                var cardName = card.getName(consts.card.powermac)
                var msg = card(session, consts.card.powermac, cardName);

                session.send(consts.prompts.POWERMAC_PROMPT);
                builder.Prompts.text(session, msg)
            break;

            case choices[2]:
                var cardName = card.getName(consts.card.rustan)
                var msg = card(session, consts.card.rustan, cardName);

                session.send(consts.prompts.RUSTANS_PROMPT);
                builder.Prompts.text(session, msg)
            break;
        }
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