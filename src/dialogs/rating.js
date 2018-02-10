const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');
const request = require('request');
const moment = require('moment-timezone');
const usersession = require('../helpers/usersession');

module.exports.happy = [
    async (session, args) => {
        var answer = args.split("/");

        if(answer[0] == "😒"){
            session.replaceDialog("/Rating/Sad", answer[1]);
        }
        else{        

        var options = {
            method: 'PUT',            
            url: 'https://iics-ticketing-api.herokuapp.com/api/rating',
            headers: 
            {
                'API-Token': 'eyJhbGciOiJIUzI1NiJ9.c2FtcGxlVG9rZW4.F2vUteLfaWAK9iUKu1PRZnPS2r_HlhzU9NC8zeBN28Q',
                'content-type': 'application/json' 
            },
            qs: {
                client: "iics",
            },              
            body:{
                id: answer[1],
                rating: "Happy"
            },
            json: true  
            };
    
            request(options, function (error, response, body) {                   
            if (error) throw new Error(error);        
            session.endConversation(consts.prompts.AFTER_RATING)
            });                        
        }
    }
]

module.exports.sad = [
    async (session, args) => {

        var options = {
            method: 'PUT',            
            url: 'https://iics-ticketing-api.herokuapp.com/api/rating',
            headers: 
            {
                'API-Token': 'eyJhbGciOiJIUzI1NiJ9.c2FtcGxlVG9rZW4.F2vUteLfaWAK9iUKu1PRZnPS2r_HlhzU9NC8zeBN28Q',
                'content-type': 'application/json' 
            },
            qs: {
                client: "iics",
            },              
            body:{
                id: args,
                rating: "Sad"
            },
            json: true  
            };
    
            request(options, function (error, response, body) {                    
            if (error) throw new Error(error);        
            session.endConversation(consts.prompts.AFTER_RATING)
            });                
    }
]