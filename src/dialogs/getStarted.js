const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');
const request = require('request');


module.exports =
    [
        (session) => {
            
            var options = {
                method: 'GET',
                url: 'https://iics-usersessions.herokuapp.com/api/bot/user/getuser',
                headers: 
                {
                    'authorization-token': 'eyJhbGciOiJIUzI1NiJ9.c2FtcGxlVG9rZW4.F2vUteLfaWAK9iUKu1PRZnPS2r_HlhzU9NC8zeBN28Q',
                    'content-type': 'application/json' 
                },
                qs:{
                        client: "iics",                
                        fb_id: session.message.address.user.id,                           
                },       
                json: true  
                };
        
                request(options, function (error, response, body) {
                if (error) {
                    api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                        if (!err) {
                            session.send(format(consts.prompts.GET_STARTED, res.first_name));
        
                            var cardName = card.getName(consts.menus.second_menu);
                            var msg = card(session, consts.menus.second_menu, cardName);                    
                            builder.Prompts.choice(session, msg, card.choices(consts.menus.second_menu), { maxRetries:0,promptAfterAction:false});
                        }
                    });
                    throw new Error(error);
                }else{
                    api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                        if (!err) {
                            session.send(format(consts.prompts.GET_STARTED, res.first_name));
        
                            var cardName = card.getName(consts.menus.first_menu);
                            var msg = card(session, consts.menus.first_menu, cardName);                    
                            builder.Prompts.choice(session, msg, card.choices(consts.menus.first_menu), { maxRetries:0,promptAfterAction:false});
                        }
                    });
                }                                    
            });


        },
        (session, results) => {
            var choices = card.choices(consts.menus.first_menu);
            if(results.response == null){
                session.replaceDialog('/')
            }else{
                var reply = results.response.entity;
                switch(reply){
                    case choices[0]:
                        session.replaceDialog('/Menu');
                    break;

                    case choices[1]:
                    session.replaceDialog('/Subscribe');
                    break;
                }
            }
        }
    ]