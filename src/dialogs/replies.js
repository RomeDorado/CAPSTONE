const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const request = require('request');

module.exports = [
    (session, args) => {

        var replies = [];

        var options = { method: 'GET',
        url: 'http://iics-response-service.herokuapp.com/api/response/intents',
        qs: { 
            client: 'iics', 
            intent: args.intent 
        }
    };
      
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
      
        for(var x = 0; x < body.length; x++){    
            replies.push(body[x].reply);               
        }
      });

      var random = replies[Math.floor(Math.random() * replies.length)];
      session.send(random);
    }
]