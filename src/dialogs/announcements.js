const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const request = require('request');


module.exports.main = [
    (session) => {
        var cardName = card.getName(consts.menus.announcements_menu);
        var msg = card(session, consts.menus.announcements_menu, cardName);                    
        builder.Prompts.choice(session, msg, card.choices(consts.menus.announcements_menu), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.menus.announcements_menu);
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:
                    session.replaceDialog('/genAnnouncements')
                break;

                case choices[1]:
                    session.replaceDialog('/depAnnouncements')
                break;
            }
        }
    }
]

module.exports.department = [
    (session) => {
        var options = {
            method: 'GET',
            url: 'https://iics-blast-service.herokuapp.com/api/cms/blast/getDepAnnouncements',
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
            if (error) throw new Error(error);

            var index = 0;
            if (typeof body.d[index] == 'undefined'){
                session.endDialog(consts.prompts.DEPARTMENT_ANNOUNCEMENTS);
            }else{                        
                for(var x = 0; x < body.d.length; x++){
                    var date = new Date(body.d[x].datetime).toDateString()
                    // var message = `Date sent: ${date}

                    // ${body.d[x].announcements}`;                    
                    session.send(format(consts.prompts.GET_STARTED, date, body.d[x].announcements));
                    // session.send(message);
                }
            }
        });
        
    }
]


module.exports.general = [
    (session) => {
        var options = {
            method: 'GET',
            url: 'https://iics-blast-service.herokuapp.com/api/cms/blast/getGenAnnouncements',
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
            if (error) throw new Error(error);
            var index = 0;
            if (typeof body.d[index] == 'undefined'){
                session.endDialog(consts.prompts.GENERAL_ANNOUNCEMENTS);
            }else{
                for(var x = 0; x < body.d.length; x++){
                    var date = new Date(body.d[x].datetime).toDateString()
                    var message = `Date sent: ${date}
                    
                    ${body.d[x].announcements}`;                    
                    session.endDialog(message);
                }
            }
        });
    }
]