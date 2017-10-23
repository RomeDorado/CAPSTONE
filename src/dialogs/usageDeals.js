const builder = require('botbuilder');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const request = require('request');
const config = require('../../config')

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

            case choices[1]:
                session.replaceDialog('/UsageDeals/Travel');
            break;

            case choices[2]:
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
        builder.Prompts.text(session, new builder.Message(session)
        .text(consts.prompts.DINING_PROMPT)
        .sourceEvent({
            facebook: {
                "quick_replies": [
                    {
                        "content_type": "location",                        
                    },
                    {
                        "content_type":"text",
                        "title":"BGC",                        
                        "payload":"BGC"
                    },
                    {
                        "content_type":"text",
                        "title":"Makati City",                        
                        "payload":"Makati City"
                    }
                ]
            }
        })        
       ,{ maxRetries:0,promptAfterAction:false} )},
    (session, results) => {        
        session.send(consts.prompts.SEND_LOCATION_PROMPT);
        
            var cardName = card.getName(consts.card.usage_deals_dining);
            var msg = card(session, consts.card.usage_deals_dining, cardName);
    
            session.send(consts.prompts.USAGEDEALS_PROMPT);
            builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_dining));
    },
        (session, results) => {
            var choices = card.choices(consts.card.usage_deals_dining);
    
            switch (results.response.entity) {
                case choices[0]:
                session.replaceDialog('/UsageDeals/DiningMoreShakeys');
                break;
    
                case choices[1]:
                    session.replaceDialog('/UsageDeals/DiningMapShakeys');
                break;
                
                case choices[3]:
                    session.replaceDialog('/UsageDeals/DiningMoreNanbantei');
                break;

                case choices[4]:
                    session.replaceDialog('/UsageDeals/DiningMapNanbantei');
                break;

                //add more here
            }
    
        }    
]
module.exports.diningMoreShakeys = [
    (session) => {        
    
        var cardName = card.getName(consts.card.usage_deals_shakeys);
        var msg = card(session, consts.card.usage_deals_shakeys, cardName);

        session.send(consts.prompts.SHAKEYS_PROMPT);
        builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_shakeys));
    },
    (session, results) => {
        var choices = card.choices(consts.card.usage_deals_shakeys);

        switch (results.response.entity) {
            case choices[0]:
            session.send("This feature is coming soon");
            //put back button here
            break;

            case choices[1]:
                session.replaceDialog('/UsageDeals');
            break;    

        }
    }  
]

module.exports.diningMapShakeys = [
    (session) => {        
        
            var cardName = card.getName(consts.card.usage_deals_shakeys_map);
            var msg = card(session, consts.card.usage_deals_shakeys_map, cardName);
        
            builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_shakeys_map));
        },
        (session, results) => {
            var choices = card.choices(consts.card.usage_deals_shakeys_map);
    
            switch (results.response.entity) {
                case choices[0]:
                session.send("This feature is coming soon");
                //put back button here
                break;
    
                case choices[1]:
                    session.replaceDialog('/UsageDeals');
                break;    
    
            }
        }  
]

module.exports.diningMoreNanbantei = [
    (session) => {        
        
            var cardName = card.getName(consts.card.usage_deals_nanbantei);
            var msg = card(session, consts.card.usage_deals_nanbantei, cardName);
    
            session.send(consts.prompts.NANBANTEI_PROMPT);
            builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_nanbantei));
        },
        (session, results) => {
            var choices = card.choices(consts.card.usage_deals_nanbantei);
    
            switch (results.response.entity) {
                case choices[0]:
                session.send("This feature is coming soon");
                //put back button here
                break;
    
                case choices[1]:
                    session.replaceDialog('/UsageDeals');
                break;    
    
            }
        }
]

module.exports.diningMapNanbantei = [
    (session) => {        
        
            var cardName = card.getName(consts.card.usage_deals_nanbantei_map);
            var msg = card(session, consts.card.usage_deals_nanbantei_map, cardName);
        
            builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_nanbantei_map));
        },
        (session, results) => {
            var choices = card.choices(consts.card.usage_deals_nanbantei_map);
    
            switch (results.response.entity) {
                case choices[0]:
                session.send("This feature is coming soon");
                //put back button here
                break;
    
                case choices[1]:
                    session.replaceDialog('/UsageDeals');
                break;    
    
            }
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
                session.replaceDialog('/UsageDeals/TravelMoreFairmont');
            break;

            case choices[1]:
            session.send(consts.prompts.FAIRMONT_RESERVATION);
            break;
            
            case choices[2]:
            session.replaceDialog('/UsageDeals/TravelMoreEmirates');
            break;
            
            case choices[3]:
            session.send(consts.prompts.EMIRATES_RESERVATION);
            break;


        }
    }
]

module.exports.travelMoreFairmont = [
    (session) => {
    
        var cardName = card.getName(consts.card.usage_deals_travel_fairmont)
        var msg = card(session, consts.card.usage_deals_travel_fairmont, cardName);

        session.send(consts.prompts.FAIRMONT_PROMPT);
        builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_travel_fairmont));
    },
    (session,results) => {
        var choices = card.choices(consts.card.usage_deals_travel_fairmont);
        
        switch (results.response.entity) {
            case choices[0]:
                session.send(consts.prompts.FAIRMONT_RESERVATION);
            break;
            
            case choices[1]:
                session.replaceDialog('/UsageDeals');
            break;
        }   
    }
]

module.exports.travelMoreEmirates = [
    (session) => {
        
            var cardName = card.getName(consts.card.usage_deals_travel_emirates)
            var msg = card(session, consts.card.usage_deals_travel_emirates, cardName);
    
            session.send(consts.prompts.EMIRATES_PROMPT);
            builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_travel_emirates));
        },
        (session,results) => {
            var choices = card.choices(consts.card.usage_deals_travel_emirates);
            
            switch (results.response.entity) {
                case choices[0]:
                    session.send(consts.prompts.EMIRATES_RESERVATION);
                break;
                
                case choices[1]:
                    session.replaceDialog('/UsageDeals');
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
                var cardName = card.getName(consts.menus.usage_deals)
                var msg = card(session, consts.menus.usage_deals, cardName);

                session.send(consts.prompts.KLOOK_PROMPT);
                builder.Prompts.choice(session, msg, card.choices(consts.menus.usage_deals));
            break;

            case choices[2]:
                var cardName = card.getName(consts.menus.usage_deals)
                var msg = card(session, consts.menus.usage_deals, cardName);

                session.send(consts.prompts.OCTAGON_PROMPT);
                builder.Prompts.choice(session, msg, card.choices(consts.menus.usage_deals));
            break;

            case choices[4]:
                var cardName = card.getName(consts.menus.usage_deals)
                var msg = card(session, consts.menus.usage_deals, cardName);

                session.send(consts.prompts.GMOVIES_PROMPT);
                builder.Prompts.choice(session, msg, card.choices(consts.menus.usage_deals));
            break;

            case choices[1]:
                session.send('This feature is coming soon');
                var cardName = card.getName(consts.menus.usage_deals_1)
                var msg = card(session, consts.menus.usage_deals_1, cardName);

                builder.Prompts.choice(session, msg, card.choices(consts.menus.usage_deals_1));
            break;
        }
    },
    (session, results) => {
        var choices = card.choices(consts.menus.usage_deals);
        var choices1 = card.choices(consts.menus.usage_deals_1)
        console.log(choices);
        console.log(choices1);

        switch(results.response.entity){
            case choices[0]:
                session.send('This feature is coming soon');
                var cardName = card.getName(consts.menus.usage_deals_1)
                var msg = card(session, consts.menus.usage_deals_1, cardName);

                builder.Prompts.choice(session, msg, card.choices(consts.menus.usage_deals_1));
            break;

            case choices[1]:
                session.replaceDialog('/UsageDeals');
            break;

            case choices1[0]:
                session.replaceDialog('/UsageDeals');
            break;
        }
    },
    (session, results) => {
        var choices = card.choices(consts.menus.usage_deals_1);
        console.log("Last dialog " + choices);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog('/UsageDeals');
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

