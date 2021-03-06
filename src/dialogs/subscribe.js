const builder = require('botbuilder');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');
const request = require('request');
const usersession = require('../helpers/usersession');
const format = require('string-format');


module.exports = [
    (session, args) => {
        if (args == undefined){
            builder.Prompts.text(session, consts.prompts.DEPARTMENT, { maxRetries:0,promptAfterAction:false});
        }

        else {
            builder.Prompts.text(session, consts.prompts.DEPARTMENT_SECOND, { maxRetries:0,promptAfterAction:false});
        }
    },
    (session, results) => {
        var email = results.response;

        var domain = email.split("@");

        if(domain[1] == "ust-ics.mygbiz.com" || (email.includes("iics") && domain[1] == "ust.edu.ph")){
            api.checkEmail(session, email, (err, res)=> {                
                if(res.success){
                    var department = res.data[0].Department;
                    // var docuAccess = false;
                    var stringDep = "";                    
                    var nameAllCaps = res.data[0].First_Name + " " + res.data[0].Last_Name
                    var nameConvert = nameAllCaps.toLowerCase();
                    var name = nameConvert.replace(/(^|\s)[a-z]/g,function(f){return f.toUpperCase();});
                    if(department == "IT") stringDep = "Information Technology Department"
                    if(department == "CS") stringDep = "Computer Science Department"
                    if(department == "IS") stringDep = "Information Systems Department"
                    usersession.createUserIfUnique(session, department, email);                    
                    session.send(format(consts.prompts.SUBSCRIBED, name, stringDep));
                    session.send(consts.prompts.NOW_DONE);
                    session.replaceDialog('/Menu');
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
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        var choices = card.choices(consts.menus.enter_email);
            if(results.response == null){
                session.replaceDialog('/')
            }else{
                var reply = results.response.entity;
                switch(reply){
                    case choices[0]:
                        session.replaceDialog('/Subscribe', { reprompt: true });
                    break;

                    case choices[1]:
                    session.replaceDialog('/Menu');
                    break;
            }
        }
    }
]

