const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const request = require('request');
const usersession = require('../helpers/usersession');

module.exports = [
    (session, args) => {
        if (args == undefined){
            builder.Prompts.text(session, consts.prompts.FACULTY_FIRST, { maxRetries:0,promptAfterAction:false});
        }

        else {
            builder.Prompts.text(session, consts.prompts.FACULTY_SECOND, { maxRetries:0,promptAfterAction:false});
        }
    },
    (session, results) => {
        var email = results.response;

        var domain = email.split("@");

        if(domain[1] == "ust-ics.mygbiz.com" || (email.includes("iics") && domain[1] == "ust.edu.ph")){
            api.checkEmail(session, email, (err, res)=> {    
                if(res.success){
                    var department = res.data[0].Department;
                    var stringDep = "";                    
                    var nameAllCaps = res.data[0].First_Name + " " + res.data[0].Last_Name
                    var nameConvert = nameAllCaps.toLowerCase();
                    var name = nameConvert.replace(/(^|\s)[a-z]/g,function(f){return f.toUpperCase();});
                    if(department == "IT") stringDep = "Information Technology Department"
                    if(department == "CS") stringDep = "Computer Science Department"
                    if(department == "IS") stringDep = "Information Systems Department"

                        usersession.updateAccess(session)
                        session.endDialog(format(consts.prompts.VERIFIED_EMAIL, name, stringDep));                                            
                    
                }else{
                    console.log("wrong email format")
                    session.send(consts.prompts.INVALID_EMAIL);
                    var cardName = card.getName(consts.menus.enter_email);
                    var msg = card(session, consts.menus.enter_email, cardName);
                    builder.Prompts.choice(session, msg, card.choices(consts.menus.enter_email), { maxRetries:0,promptAfterAction:false});
                }            
            });
        }else{
            console.log("wrong email format")
            session.send(consts.prompts.INVALID_EMAIL);
            var cardName = card.getName(consts.menus.enter_email);
            var msg = card(session, consts.menus.enter_email, cardName);
            builder.Prompts.choice(session, msg, card.choices(consts.menus.enter_email), { maxRetries:0,promptAfterAction:false});
        }
    },
    (session, results) => {
        console.log(results)
        if(results.response.hasOwnProperty("score")){
            if(results.response.score< 0.8){
                session.replaceDialog('/')
                return;
            }
        }        
        var choices = card.choices(consts.menus.enter_email);
            if(results.response == null){
                session.replaceDialog('/')
            }else{
                var reply = results.response.entity;
                switch(reply){
                    case choices[0]:
                        session.replaceDialog('/FacultyInquiry', { reprompt: true });
                    break;

                    case choices[1]:
                    session.replaceDialog('/Menu');
                    break;
            }
        }
    }
]
