const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const request = require('request');

module.exports = [
    (session, args) => {
        
        var options = { method: 'GET',
        url: 'http://iics-response-service.herokuapp.com/api/response/intents',
        qs: { 
            client: 'iics', 
            intent: "get_greetings" 
        },
        headers: { 
         'content-type': 'Application/json' 
        }
    };
      
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var replies = response.body.data;        
        var random = replies[Math.floor(Math.random() * replies.length)];
        session.send(random);

      });

      
    }
]