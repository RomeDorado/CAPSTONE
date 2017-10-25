const builder = require('botbuilder');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');

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

            case choices[1]:
                session.userData.card = results.response.entity;
                session.replaceDialog('/CreditCards/Requirements');
            break;

            case choices[3]:
                session.userData.card = results.response.entity;
                session.replaceDialog('/CreditCards/Requirements');
            break;

            case choices[5]:
                session.userData.card = results.response.entity;
                session.replaceDialog('/CreditCards/Requirements');
            break;

            case choices[7]:
                session.userData.card = results.response.entity;
                session.replaceDialog('/CreditCards/Requirements');
            break;

            case choices[9]:   
                session.userData.card = results.response.entity;   
                session.replaceDialog('/CreditCards/Requirements');
            break;

            default:
                session.replaceDialog('/GetDetails');
            break;
        }
        
    }
]

module.exports.main_1 = [
    (session) => {
        var cardName = card.getName(consts.card.credit_card_1);
        var msg = card(session, consts.card.credit_card_1, cardName);

        builder.Prompts.choice(session, msg, card.choices(consts.card.credit_card_1));
        console.log(msg);
    },
    (session, results) => {
        var choices = card.choices(consts.card.credit_card_1);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog('/CardOptions/Rewards');
            break;
            
            case choices[2]:
                session.replaceDialog('/CardOptions/CashBack');
            break;

            case choices[4]:
                session.replaceDialog('/CardOptions/Premier');
            break;

            case choices[6]:
                session.replaceDialog('/CardOptions/Shell');
            break;

            case choices[8]:
                session.replaceDialog('/CardOptions/Mercury');
            break;

            case choices[1]:
                session.replaceDialog('/CreditCards/Requirements/InstantApproval');
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

        api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                if (!err) {
                    session.send(format(consts.prompts.CITI_REWARDS, res.first_name));
                }
            });
        builder.Prompts.choice(session, msg, card.choices(consts.menus.credit_card));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog("/CreditCards/Requirements");
            break;

            case choices[1]:
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

module.exports.rewards_1 = [
    (session) => {
        // builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_REWARDS, consts.styles.button); 
        var cardName = card.getName(consts.menus.credit_card_1);
        var msg = card(session, consts.menus.credit_card_1, cardName);

        api.userProfile(session.message.user.id, 'first_name', (err, res) => {
            if (!err) {
                session.send(format(consts.prompts.CITI_REWARDS, res.first_name));
            }
        });
        builder.Prompts.choice(session, msg, card.choices(consts.menus.credit_card_1));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card_1);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){

            case choices[0]:
                session.replaceDialog("/Requirements");
            break;

            case choices[1]:
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

        api.userProfile(session.message.user.id, 'first_name', (err, res) => {
            if (!err) {
                session.send(format(consts.prompts.CITI_CASHBACK, res.first_name));
            }
        });
        builder.Prompts.choice(session, msg, card.choices(consts.menus.credit_card));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog("/CreditCards/Requirements");
            break;

            case choices[1]:
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

module.exports.cashBack_1 = [
    (session) => {
        //builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_CASH, consts.styles.button);
        var cardName = card.getName(consts.menus.credit_card_1);
        var msg = card(session, consts.menus.credit_card_1, cardName);

        api.userProfile(session.message.user.id, 'first_name', (err, res) => {
            if (!err) {
                session.send(format(consts.prompts.CITI_CASHBACK, res.first_name));
            }
        });
        builder.Prompts.choice(session, msg, card.choices(consts.menus.credit_card_1));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog("/CreditCards/Requirements/InstantApproval");
            break;

            case choices[1]:
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

        api.userProfile(session.message.user.id, 'first_name', (err, res) => {
            if (!err) {
                session.send(format(consts.prompts.CITI_PREMIER, res.first_name));
            }
        });
        builder.Prompts.choice(session, msg, card.choices(consts.menus.credit_card));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog("/CreditCards/Requirements");
            break;

            case choices[1]:
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

module.exports.premier_1 = [
    (session) => {
        // builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_PREMIER, consts.styles.button);
        var cardName = card.getName(consts.menus.credit_card_1);
        var msg = card(session, consts.menus.credit_card_1, cardName);

        api.userProfile(session.message.user.id, 'first_name', (err, res) => {
            if (!err) {
                session.send(format(consts.prompts.CITI_PREMIER, res.first_name));
            }
        });
        builder.Prompts.choice(session, msg, card.choices(consts.menus.credit_card_1));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card_1);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog("/CreditCards/Requirements/InstantApproval");
            break;

            case choices[1]:
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

        api.userProfile(session.message.user.id, 'first_name', (err, res) => {
            if (!err) {
                session.send(format(consts.prompts.CITI_SHELL, res.first_name));
            }
        });
        builder.Prompts.choice(session, msg, card.choices(consts.menus.credit_card));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog("/CreditCards/Requirements");
            break;

            case choices[1]:
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

module.exports.shell_1 = [
    (session) => {
        // builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_SHELL, consts.styles.button);
        var cardName = card.getName(consts.menus.credit_card_1);
        var msg = card(session, consts.menus.credit_card_1, cardName);

        api.userProfile(session.message.user.id, 'first_name', (err, res) => {
            if (!err) {
                session.send(format(consts.prompts.CITI_SHELL, res.first_name));
            }
        });
        builder.Prompts.choice(session, msg, card.choices(consts.menus.credit_card_1));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card_1);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog("/CreditCards/Requirements/InstantApproval");
            break;

            case choices[1]:
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

        api.userProfile(session.message.user.id, 'first_name', (err, res) => {
            if (!err) {
                session.send(format(consts.prompts.CITI_MERCURY, res.first_name));
            }
        });
        builder.Prompts.choice(session, msg, card.choices(consts.menus.credit_card));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog("/CreditCards/Requirements");
            break;

            case choices[1]:
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

module.exports.mercury_1 = [
    (session) => {
        //builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_MD, consts.styles.button);
        var cardName = card.getName(consts.menus.credit_card_1);
        var msg = card(session, consts.menus.credit_card_1, cardName);

        api.userProfile(session.message.user.id, 'first_name', (err, res) => {
            if (!err) {
                session.send(format(consts.prompts.CITI_MERCURY, res.first_name));
            }
        });
        builder.Prompts.choice(session, msg, card.choices(consts.menus.credit_card_1));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.credit_card_1);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                session.replaceDialog("/CreditCards/Requirements/InstantApproval");
            break;

            case choices[1]:
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

/**Requirements Dialogs */
module.exports.requirements = [
    (session) => {
        //builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_MD, consts.styles.button);
        var cardName = card.getName(consts.menus.requirements);
        var msg = card(session, consts.menus.requirements, cardName);

        builder.Prompts.choice(session, msg, card.choices(consts.menus.requirements));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.requirements);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                var cardName= card.getName(consts.menus.instant_approval)
                var msg = card(session, consts.menus.instant_approval, cardName);

                session.send(consts.prompts.REQUIREMENTS_EMPLOYED);
                session.send(consts.prompts.INSTANT_APPROVAL);
                builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval))
            break;

            case choices[1]:
                var cardName= card.getName(consts.menus.instant_approval)
                var msg = card(session, consts.menus.instant_approval, cardName);

                api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                    if (!err) {
                        session.send(format(consts.prompts.REQUIREMENTS_SELF_EMPLOYED, res.first_name));
                    }
                });
                session.send(consts.prompts.INSTANT_APPROVAL);
                builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval))
            break;

            case choices[2]:
                var cardName= card.getName(consts.menus.instant_approval)
                var msg = card(session, consts.menus.instant_approval, cardName);

                api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                    if (!err) {
                        session.send(format(consts.prompts.REQUIREMENTS_NOT_EMPLOYED, res.first_name));
                    }
                });
                session.send(consts.prompts.INSTANT_APPROVAL);
                builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval))
            break;
            
            default:
                session.replaceDialog('/GetDetails');
            break;
        }
    },
    (session, results) => {
        var choices = card.choices(consts.menus.instant_approval);
        
        switch(results.response.entity){
            case choices[0]:
                var cardName= card.getName(consts.menus.instant_approval_yes)
                var msg = card(session, consts.menus.instant_approval_yes, cardName);

                api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                    if (!err) {
                        session.send(format(consts.prompts.INSTANT_APPROVAL_YES, res.first_name));
                    }
                });
                builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval_yes))
            break;

            case choices[1]:
                api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                    if (!err) {
                        session.send(format(consts.prompts.INSTANT_APPROVAL_NO, res.first_name));
                    }
                });
            break;
        }
    },
    (session, results) => {
        var choices = card.choices(consts.menus.instant_approval);
        console.log(session.userData.card);
            switch(session.userData.card){
                case "Reward":
                    session.replaceDialog('/CardOptions/Rewards')
                break;

                case "Cash":
                    session.replaceDialog("/CardOptions/CashBack");
                break;

                case "Premier":
                    session.replaceDialog("/CardOptions/Premier");
                break;

                case "Shell":
                    session.replaceDialog("/CardOptions/Shell");
                break;

                case "Mercury":
                    session.replaceDialog("/CardOptions/Mercury");
                break;
            }
    }
]

module.exports.requirements_1 = [
    (session) => {
        //builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_MD, consts.styles.button);
        var cardName = card.getName(consts.menus.requirements);
        var msg = card(session, consts.menus.requirements, cardName);

        builder.Prompts.choice(session, msg, card.choices(consts.menus.requirements));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.requirements);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                var cardName= card.getName(consts.menus.instant_approval)
                var msg = card(session, consts.menus.instant_approval, cardName);

                session.send(consts.prompts.REQUIREMENTS_EMPLOYED);
                session.send(consts.prompts.INSTANT_APPROVAL);
                builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval))
            break;

            case choices[1]:
                var cardName= card.getName(consts.menus.instant_approval)
                var msg = card(session, consts.menus.instant_approval, cardName);

                api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                    if (!err) {
                        session.send(format(consts.prompts.REQUIREMENTS_SELF_EMPLOYED, res.first_name));
                    }
                });
                session.send(consts.prompts.INSTANT_APPROVAL);
                builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval))
            break;

            case choices[2]:
                var cardName= card.getName(consts.menus.instant_approval)
                var msg = card(session, consts.menus.instant_approval, cardName);

                api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                    if (!err) {
                        session.send(format(consts.prompts.REQUIREMENTS_NOT_EMPLOYED, res.first_name));
                    }
                });
                session.send(consts.prompts.INSTANT_APPROVAL);
                builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval))
            break;
            
            default:
                session.replaceDialog('/GetDetails');
            break;
        }
    },
    (session, results) => {
        var choices = card.choices(consts.menus.instant_approval);
        
        switch(results.response.entity){
            case choices[0]:
                var cardName= card.getName(consts.menus.instant_approval_yes_1)
                var msg = card(session, consts.menus.instant_approval_yes_1, cardName);

                api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                    if (!err) {
                        session.send(format(consts.prompts.INSTANT_APPROVAL_YES, res.first_name));
                    }
                });
                builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval_yes_1))
            break;

            case choices[1]:
                api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                    if (!err) {
                        session.send(format(consts.prompts.INSTANT_APPROVAL_NO, res.first_name));
                    }
                });
            break;
        }
    }
]

/**Instant Approval Dialogs */
module.exports.instant_approval = [
    (session) => {
        //builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_MD, consts.styles.button);
        var cardName = card.getName(consts.menus.instant_approval);
        var msg = card(session, consts.menus.instant_approval, cardName);

        session.send(consts.prompts.INSTANT_APPROVAL)
        builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.instant_approval);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                var cardName= card.getName(consts.menus.instant_approval_yes)
                var msg = card(session, consts.menus.instant_approval_yes, cardName);

                session.send(format(consts.prompts.INSTANT_APPROVAL_YES));
                builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval_yes))
            break;

            case choices[1]:
                var cardName= card.getName(consts.menus.instant_approval_no)
                var msg = card(session, consts.menus.instant_approval_no, cardName);

                api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                    if (!err) {
                        session.send(format(consts.prompts.INSTANT_APPROVAL_NO, res.first_name));
                    }
                });
                builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval_no))
            break;
            
            default:
                session.replaceDialog('/GetDetails');
            break;
        }
    },
    (session, results) => {
        switch(results.response.entity){
            case "Back to Main Menu":
                session.replaceDialog('/Menu');
            break;

            case "Back to Credit Cards":
                session.replaceDialog('/CreditCards');
            break;
        }
        
    }
]

module.exports.instant_approval_1 = [
    (session) => {
        //builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_MD, consts.styles.button);
        var cardName = card.getName(consts.menus.instant_approval);
        var msg = card(session, consts.menus.instant_approval, cardName);

        session.send(consts.prompts.INSTANT_APPROVAL)
        builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval));
    },
    (session, results) => {
        var choices = card.choices(consts.menus.instant_approval);
        console.log(choices);
        console.log(results.response.entity);

        switch(results.response.entity){
            case choices[0]:
                var cardName= card.getName(consts.menus.instant_approval_yes_1)
                var msg = card(session, consts.menus.instant_approval_yes_1, cardName);

                session.send(format(consts.prompts.INSTANT_APPROVAL_YES));
                builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval_yes_1))
            break;

            case choices[1]:
                var cardName= card.getName(consts.menus.instant_approval_no)
                var msg = card(session, consts.menus.instant_approval_no, cardName);

                api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                    if (!err) {
                        session.send(format(consts.prompts.INSTANT_APPROVAL_NO, res.first_name));
                    }
                });
                builder.Prompts.choice(session, msg, card.choices(consts.menus.instant_approval_no))
            break;
            
            default:
                session.replaceDialog('/GetDetails');
            break;
        }
    },
    (session, results) => {
        switch(results.response.entity){
            case "Requirements":
                session.replaceDialog('/CreditCards/Requirements');
            break;

            case "Back to Main Menu":
                session.replaceDialog('/Menu');
            break;

            case "Back to Credit Cards":
                session.replaceDialog('/CreditCards');
            break;
        }
        
    }
]