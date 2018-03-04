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
                'authorization-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
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

                case 'get_faculty_currentclass':
                    session.replaceDialog('/FacultySched/CurrentClass', {firstname: args.firstname, prof: args.prof, datetime: args.datetime});
                break;

                case 'get_faculty_subject_time':
                    session.replaceDialog('/FacultySched/SubjectTime', {firstname: args.firstname, prof: args.prof, datetime: args.datetime, section: args.section, subject: args.subject, timeOrDay: args.timeOrDay});
                break;

                // 
                
            }            
            
        }

      });

    }
]
