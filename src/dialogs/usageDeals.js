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
        builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.card.usage_deals);
        if(results.response == null){
            session.replaceDialog('/');
        }
        else{
            var reply = results.response.entity;
            switch(reply) {
                case choices[0]:
                    session.replaceDialog('/UsageDeals/Dining');
                break;
    
                case choices[1]:
                    session.replaceDialog('/UsageDeals/Travel');
                break;
    
                case choices[2]:
                    session.replaceDialog('/UsageDeals/Online');
                break;
    
                default:
                    session.replaceDialog('/')
                break;
    
                // case consts.choices.USAGE_DEALS[3]:
                //     session.replaceDialog('/UsageDeals/Installments');
                // break;
    
                // case consts.choices.CREDIT_CARD[4]:
                //     session.replaceDialog('/UsageDeals/Bill');
                // break;
    
                // case consts.choices.CREDIT_CARD[6]:
                //     session.replaceDialog('/UsageDeals/World');
                // break;
            }
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
            builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_dining), { maxRetries:0,promptAfterAction:false});
    },
        (session, results) => {
            var choices = card.choices(consts.card.usage_deals_dining);
            if(results.response == null){
                session.replaceDialog('/');
            }else{
                var reply = results.response.entity;
                switch(reply) {
                    case choices[0]:
                    session.replaceDialog('/UsageDeals/DiningMoreShakeys');
                    break;
        
                    case choices[1]:
                        session.replaceDialog('/UsageDeals/DiningMapShakeys');
                    break;

                    case choices[2]:
                        session.replaceDialog('/UsageDeals/ReserveShakeys');
                    break;
                    
                    case choices[3]:
                        session.replaceDialog('/UsageDeals/DiningMoreNanbantei');
                    break;
    
                    case choices[4]:
                        session.replaceDialog('/UsageDeals/DiningMapNanbantei');
                    break;

                    case choices[5]:
                        session.replaceDialog('/UsageDeals/ReserveNanbantei')
                    break;
    
                    default:
                        session.replaceDialog('/')
                    break;
    
                    //add more here
                }
            }
    
        }    
]
module.exports.diningMoreShakeys = [
    (session) => {        
    
        var cardName = card.getName(consts.card.usage_deals_shakeys);
        var msg = card(session, consts.card.usage_deals_shakeys, cardName);

        session.send(consts.prompts.SHAKEYS_PROMPT);
        builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_shakeys), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.card.usage_deals_shakeys);
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply) {
                case choices[0]:
                    session.replaceDialog('/UsageDeals/ReserveShakeys');
                break;
    
                case choices[1]:
                    session.replaceDialog('/UsageDeals/Dining');
                break;
                
                default:
                    session.replaceDialog('/')
                break;
    
            }
        }
       
    }  
]

module.exports.diningMapShakeys = [
    (session) => {        
        
            var cardName = card.getName(consts.card.usage_deals_shakeys_map);
            var msg = card(session, consts.card.usage_deals_shakeys_map, cardName);
        
            builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_shakeys_map), { maxRetries:0,promptAfterAction:false});
        },
        (session, results) => {
            var choices = card.choices(consts.card.usage_deals_shakeys_map);
            if(results.response == null){
                session.replaceDialog('/')
            }else{
                var reply = results.response.entity;
                switch(reply) {
                    case choices[0]:
                        session.replaceDialog('/UsageDeals/ReserveShakeys')
                    break;
        
                    case choices[1]:
                        session.replaceDialog('/UsageDeals/Dining');
                    break;    
    
                    default:
                        session.replaceDialog('/')
                    break;
        
                }
            }
        }  
]

module.exports.diningReserveShakeys = [
    (session) => {
        var cardName = card.getName(consts.menus.shakeys_reserve);
        var msg = card(session, consts.menus.shakeys_reserve, cardName);

        session.send(consts.prompts.SHAKEYS_RESERVE)        
        builder.Prompts.choice(session, msg, card.choices(consts.menus.shakeys_reserve), { maxRetries:0,promptAfterAction:false});
    }
]

module.exports.diningMoreNanbantei = [
    (session) => {        
        
            var cardName = card.getName(consts.card.usage_deals_nanbantei);
            var msg = card(session, consts.card.usage_deals_nanbantei, cardName);
    
            session.send(consts.prompts.NANBANTEI_PROMPT);
            builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_nanbantei), { maxRetries:0,promptAfterAction:false});
        },
        (session, results) => {
            var choices = card.choices(consts.card.usage_deals_nanbantei);
            if(results.response == null){
                session.replaceDialog('/')
            }else{
                var reply = results.response.entity
                switch(reply) {
                    case choices[0]:
                        session.replaceDialog('/UsageDeals/ReserveNanbantei');
                    break;
        
                    case choices[1]:
                        session.replaceDialog('/UsageDeals/Dining');
                    break;    
    
                    default:
                        session.replaceDialog('/')
                    break;
        
                }
            }
        }
]

module.exports.diningMapNanbantei = [
    (session) => {        
        
            var cardName = card.getName(consts.card.usage_deals_nanbantei_map);
            var msg = card(session, consts.card.usage_deals_nanbantei_map, cardName);
        
            builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_nanbantei_map), { maxRetries:0,promptAfterAction:false});
        },
        (session, results) => {
            var choices = card.choices(consts.card.usage_deals_nanbantei_map);
            if(results.response == null){
                session.replaceDialog('/')
            }else{
                var reply = results.response.entity;
                switch(reply) {
                    case choices[0]:
                        session.replaceDialog('/UsageDeals/ReserveNanbantei');
                    break;
        
                    case choices[1]:
                        session.replaceDialog('/UsageDeals/Dining');
                    break;    
    
                    default:
                        session.replaceDialog('/')
                    break;
        
                }
            }
        }  
]

module.exports.diningReserveNanbantei = [
    (session) => {
        var cardName = card.getName(consts.menus.nanbantei_reserve);
        var msg = card(session, consts.menus.nanbantei_reserve, cardName);

        session.send(consts.prompts.NANBANTEI_RESERVE)        
        builder.Prompts.choice(session, msg, card.choices(consts.menus.nanbantei_reserve), { maxRetries:0,promptAfterAction:false});
    }
]

/**Travel dialog */
module.exports.travel = [
    (session) => {
        var cardName = card.getName(consts.card.usage_deals_travel)
        var msg = card(session, consts.card.usage_deals_travel, cardName);

        session.send(consts.prompts.TRAVEL_PROMPT);
        builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_travel), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.card.usage_deals_travel);
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply) {
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
    
                default:
                    session.replaceDialog('/')
                break;
    
            }
        }
    }
]

module.exports.travelMoreFairmont = [
    (session) => {
    
        var cardName = card.getName(consts.card.usage_deals_travel_fairmont)
        var msg = card(session, consts.card.usage_deals_travel_fairmont, cardName);

        session.send(consts.prompts.FAIRMONT_PROMPT);
        builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_travel_fairmont), { maxRetries:0,promptAfterAction:false});
    },
    (session,results) => {
        var choices = card.choices(consts.card.usage_deals_travel_fairmont);
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply) {
                case choices[0]:
                    session.send(consts.prompts.FAIRMONT_RESERVATION);
                break;
                
                case choices[1]:
                    session.replaceDialog('/UsageDeals/Travel');
                break;
    
                default:
                    session.replaceDialog('/');
                break;
            }  
        } 
    }
]

module.exports.travelMoreEmirates = [
    (session) => {
        
            var cardName = card.getName(consts.card.usage_deals_travel_emirates)
            var msg = card(session, consts.card.usage_deals_travel_emirates, cardName);
    
            session.send(consts.prompts.EMIRATES_PROMPT);
            builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_travel_emirates), { maxRetries:0,promptAfterAction:false});
        },
        (session,results) => {
            var choices = card.choices(consts.card.usage_deals_travel_emirates);
            if(results.response == null){
                session.replaceDialog('/')
            }else{
                var reply = results.response.entity;
                switch(reply) {
                    // case choices[0]:
                    //     session.send(consts.prompts.EMIRATES_RESERVATION);
                    // break;
                    
                    case choices[0]:
                        session.replaceDialog('/UsageDeals/Travel');
                    break;
    
                    default:
                        session.replaceDialog('/')
                    break;
                }   
            }
            
        }   
]

/**Online dialog */
module.exports.online = [
    (session) => {
        var cardName = card.getName(consts.card.usage_deals_online)
        var msg = card(session, consts.card.usage_deals_online, cardName);

        //For the online
        session.send(consts.prompts.TRAVEL_PROMPT);
        builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_online), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.card.usage_deals_online);
        if(results.response == null){
            session.replaceDialog('/')
        }else {
            var reply = results.response.entity;
            switch(reply) {
                case choices[0]:
                    var cardName = card.getName(consts.menus.usage_deals)
                    var msg = card(session, consts.menus.usage_deals, cardName);
    
                    session.send(consts.prompts.KLOOK_PROMPT);
                    builder.Prompts.choice(session, msg, card.choices(consts.menus.usage_deals), { maxRetries:0,promptAfterAction:false});
                break;
    
                case choices[2]:
                    var cardName = card.getName(consts.menus.usage_deals)
                    var msg = card(session, consts.menus.usage_deals, cardName);
    
                    session.send(consts.prompts.FLYTPACK_PROMPT);
                    builder.Prompts.choice(session, msg, card.choices(consts.menus.usage_deals), { maxRetries:0,promptAfterAction:false});
                break;
    
                case choices[4]:
                    var cardName = card.getName(consts.menus.usage_deals)
                    var msg = card(session, consts.menus.usage_deals, cardName);
    
                    session.send(consts.prompts.GMOVIES_PROMPT);
                    builder.Prompts.choice(session, msg, card.choices(consts.menus.usage_deals), { maxRetries:0,promptAfterAction:false});
                break;
    
                case choices[1]:
                    session.send('This feature is coming soon');
                    var cardName = card.getName(consts.menus.usage_deals_1)
                    var msg = card(session, consts.menus.usage_deals_1, cardName);
    
                    builder.Prompts.choice(session, msg, card.choices(consts.menus.usage_deals_1), { maxRetries:0,promptAfterAction:false});
                break;
    
                default:
                    session.replaceDialog('/')
                break;
            }
        }
        
    },
    (session, results) => {
        var choices = card.choices(consts.menus.usage_deals);
        var choices1 = card.choices(consts.menus.usage_deals_1)
        console.log(choices);
        console.log(choices1);
        if(results.response == null){
            session.replaceDialog('/');
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:
                    session.send('This feature is coming soon');
                    var cardName = card.getName(consts.menus.usage_deals_1)
                    var msg = card(session, consts.menus.usage_deals_1, cardName);
    
                    builder.Prompts.choice(session, msg, card.choices(consts.menus.usage_deals_1), { maxRetries:0,promptAfterAction:false});
                break;
    
                case choices[1]:
                    session.replaceDialog('/UsageDeals/Online');
                break;
    
                case choices1[0]:
                    session.replaceDialog('/UsageDeals/Online');
                break;
    
                default:
                    session.replaceDialog('/')
                break;
            }
        }
        
    },
    (session, results) => {
        var choices = card.choices(consts.menus.usage_deals_1);
        console.log("Last dialog " + choices);
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:
                    session.replaceDialog('/UsageDeals/Online');
                break;
    
                default:
                    session.replaceDialog('/')
                break;
            }
        }
    }
]

/**Shell dialog */
module.exports.shell = [
    (session) => {
        builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_SHELL, consts.styles.button);
    },
    (session, results) => {
        var reply = results.response.entity;
        switch(reply) {
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
        var reply = results.response.entity;
        switch(reply) {
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

