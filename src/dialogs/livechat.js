const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');
const request = require('request');
const moment = require('moment-timezone');
const usersession = require('../helpers/usersession');

module.exports = [
    (session) => {
        api.checkUser(session, (err, res) => {
            if(res.d == "Resource not found."){
                usersession.createUserLiveChat(session, null);
            }
            api.checkAdmin(session);            
            session.endConversation(consts.prompts.LIVE_CHAT_WAIT);
            usersession.livechat(session);
        });
        
        
    }
]