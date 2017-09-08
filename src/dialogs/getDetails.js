const builder = require('botbuilder');
const consts = require('../helpers/consts');
const format = require('string-format');

module.exports.main = [
    (session) => {
        builder.Prompts.text(session, consts.prompts.GET_NAME);
    },
    (session, results) => {
        builder.Prompts.number(session, consts.prompts.GET_NUMBER);
    },
    (session, results) => {
        session.replaceDialog('/GetDetails/Email');
    }
]

module.exports.email = [

    function(session, args){
        session.conversationData.loanDialog = args && args.loanDialog ? args.loanDialog : false;

        if(args && args.reprompt){
            builder.Prompts.text(session, consts.prompts.INVALID_EMAIL);
        }else{
            builder.Prompts.text(session, consts.prompts.GET_EMAIL);
        }
    },
    function(session, results, next){
        var emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
        var matched = emailregex.test(results.response);
        if(!matched){
            session.replaceDialog('/GetDetails/Email', { reprompt: true });
        }else{
            if(!session.conversationData.loanDialog){
                builder.Prompts.text(session, consts.prompts.GET_TIME);
            }else{
                next();
            }
            
        }
    },
    function(session, results){
        if(!session.conversationData.loanDialog){
            builder.Prompts.choice(session, consts.prompts.GET_INCOME, consts.choices.INCOME_RANGE, consts.styles.button);
        }else{
            builder.Prompts.choice(session, consts.prompts.GET_INCOME, consts.choices.LOAN_INCOME_RANGE, consts.styles.button);
        }  
    },
    function(session, results){
        session.endConversation(format(consts.prompts.GET_DETAILS_DONE, 'User'));
    }

]

module.exports.loans = [
    (session) => {
        builder.Prompts.confirm(session, consts.prompts.GET_LOAN_CONFIRMATION, consts.styles.button);
    },
    (session, results) => {
        if(!results.response){
            builder.Prompts.choice(session, consts.prompts.GET_LOAN_CONFIRMATION_NO, consts.choices.BACK_TO_MENU, consts.styles.button);
        }else{
            builder.Prompts.text(session, consts.prompts.GET_NAME);
        }
    },
    (session, results) => {
        if(results.response.entity && results.response.entity == consts.choices.BACK_TO_MENU[0]){
            session.replaceDialog('/Menu');
        }else{
            builder.Prompts.number(session, consts.prompts.GET_NUMBER);
        }
    },
    (session, results) => {
        session.replaceDialog('/GetDetails/Email', {loanDialog: true});
    }
]