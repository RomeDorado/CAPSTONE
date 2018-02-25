const builder = require('botbuilder');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');
const request = require('request');

module.exports = [
    (session, args) => {
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
                    fb_id: session.message.sourceEvent.sender.id                            
            },       
            json: true  
            };
      
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        if(!response.body.d.facAccess){
            session.replaceDialog('/FacultyInquiry');
        }else{
            console.log(args, 'args check access')
            switch(args.intent){
                case 'get_next_class':
                    session.replaceDialog('/FacultySched/NextClass', {firstname: args.firstname, prof: args.prof, datetime: args.datetime});
                break;

                case 'get_faculty_room':
                    session.replaceDialog('/FacultySched/Room', {firstname: args.firstname, prof: args.prof, datetime: args.datetime});
                break;
            }            
            
        }

      });

    }
]
