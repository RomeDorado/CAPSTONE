const builder = require('botbuilder');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');
const request = require('request');


module.exports = [
    (session) => {        
        builder.Prompts.choice(session, consts.prompts.DEPARTMENT, consts.choices.SUBSCRIBE, consts.styles.button);
    },
    (session, results, callback) => {
        var department = results.response.entity;
        
        var options = {
            // url: format('https://graph.facebook.com/v2.6/{0}?fields={1}&access_token={2}', uid, fields, process.env.FB_ACCESS_TOKEN) ,
            method: 'POST',
            body: {
                    fb_id: event.address.user.id,
                    department: department
            },
            json: true,
            client: 'iics'
        }
    
        request(options, (err, httpRes, body) => {
            !err ? callback(null, JSON.parse(body)) : callback(err, body); 
        });    
        session.send(consts.prompts.SUBSCRIBED);
        session.send(consts.prompts.NOW_DONE);
        session.replaceDialog('/Menu');
    }
]