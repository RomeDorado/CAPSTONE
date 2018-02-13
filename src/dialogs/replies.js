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
            intent: args
        },
        headers: { 
         'Content-type': 'Application/json' 
        },
        json: true
    };
      
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var replies = response.body.data;
        console.log(replies)
        var random = replies[Math.floor(Math.random() * replies.length)];
        if(random && random.includes("http")){
            var img = new builder.Message(session)
                        .addAttachment({
                            contentURL: random,
                            contentType: 'image/jpg',                            
                        });                    
                    session.endDialog(img);
        }else{
            session.endDialog(random);
        }
        

      });

      
    }
]