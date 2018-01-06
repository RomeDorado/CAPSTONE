const builder = require('botbuilder');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');
const request = require('request');
const usersession = require('../helpers/usersession');


module.exports = [
    (session) => {        
        builder.Prompts.choice(session, consts.prompts.DEPARTMENT, consts.choices.SUBSCRIBE, consts.styles.button);
    },
    (session, results, callback) => {
        var department = results.response.entity;        
        console.log(session.message.user.name)
        console.log(session.message.address.user.id)
        // usersession.createUserIfUnique(session, department)


        session.send(consts.prompts.SUBSCRIBED);
        session.send(consts.prompts.NOW_DONE);
        session.replaceDialog('/Menu');
    }
]