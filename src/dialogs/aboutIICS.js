const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');

module.exports.main =
[
    (session) => {
        var cardName = card.getName(consts.menus.about);
        var msg = card(session, consts.menus.about, cardName);
        
        builder.Prompts.choice(session, msg, card.choices(consts.menus.about), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.menus.about);
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:                    
                    session.replaceDialog('/About/IICS');
                break;
    
                case choices[1]:
                    session.replaceDialog('/About/Vision');  
                break;      
                
                 case choices[2]:                    
                    session.replaceDialog('/About/Mission');
                break;
    
                case choices[3]:
                    session.replaceDialog('/About/Administrators');
                break;  
    
                 case choices[4]:                    
                    session.replaceDialog('/About/Chairpersons');
                break;
    
                case choices[5]:
                    session.replaceDialog('/About/Staffs'); 
                break;  

                 case choices[6]:                    
                    session.replaceDialog('/About/Courses');
                break;

                default:
                    session.replaceDialog('/')
                break;
            }
        }
    }
]

module.exports.about = [
    (session) => {
        session.send(consts.prompts.ABOUT_IICS);
        session.send(consts.prompts.ABOUT_IICS_2);
        var cardName = card.getName(consts.menus.back_menu);
        var msg = card(session, consts.menus.back_menu, cardName);
        
        builder.Prompts.choice(session, msg, card.choices(consts.menus.back_menu), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.menus.back_menu);
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:                    
                    session.replaceDialog('/Menu');
                break;

                default:
                    session.replaceDialog("/");
                break;
            }
        }
    }
]

module.exports.vision = [
    (session) => {
        session.send(consts.prompts.VISION_IICS);
        var cardName = card.getName(consts.menus.back_menu);
        var msg = card(session, consts.menus.back_menu, cardName);
        
        builder.Prompts.choice(session, msg, card.choices(consts.menus.back_menu), { maxRetries:0,promptAfterAction:false});
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
        var choices = card.choices(consts.menus.back_menu);
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:                    
                    session.replaceDialog('/Menu');
                break;

                default:
                    session.replaceDialog("/");
                break;
            }
        }
    }
]

module.exports.mission = [
    (session) => {
        session.send(consts.prompts.MISSION_IICS);
        var cardName = card.getName(consts.menus.back_menu);
        var msg = card(session, consts.menus.back_menu, cardName);
        
        builder.Prompts.choice(session, msg, card.choices(consts.menus.back_menu), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.menus.back_menu);
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:                    
                    session.replaceDialog('/Menu');
                break;

                default:
                    session.replaceDialog("/");
                break;
            }
        }
    }
]

module.exports.admin = [
    (session) => {
        session.send(consts.prompts.ADMIN_IICS);
        var cardName = card.getName(consts.menus.back_menu);
        var msg = card(session, consts.menus.back_menu, cardName);
        
        builder.Prompts.choice(session, msg, card.choices(consts.menus.back_menu), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.menus.back_menu);
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:                    
                    session.replaceDialog('/Menu');
                break;

                default:
                    session.replaceDialog("/");
                break;
            }
        }
    }
]

module.exports.chair = [
    (session) => {
        session.send(consts.prompts.CHAIR_IICS);
        var cardName = card.getName(consts.menus.back_menu);
        var msg = card(session, consts.menus.back_menu, cardName);
        
        builder.Prompts.choice(session, msg, card.choices(consts.menus.back_menu), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.menus.back_menu);
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:                    
                    session.replaceDialog('/Menu');
                break;

                default:
                    session.replaceDialog("/");
                break;
            }
        }
    }
]

module.exports.staff = [
    (session) => {
        session.send(consts.prompts.STAFF_IICS);
        var cardName = card.getName(consts.menus.back_menu);
        var msg = card(session, consts.menus.back_menu, cardName);
        
        builder.Prompts.choice(session, msg, card.choices(consts.menus.back_menu), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.menus.back_menu);
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:                    
                    session.replaceDialog('/Menu');
                break;

                default:
                    session.replaceDialog("/");
                break;
            }
        }
    }
]

module.exports.courses = [
    (session) => {
        session.send(consts.prompts.COURSES_IICS);
        var cardName = card.getName(consts.menus.courses_menu);
        var msg = card(session, consts.menus.courses_menu, cardName);
        
        builder.Prompts.choice(session, msg, card.choices(consts.menus.courses_menu), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.menus.courses_menu);
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:                    
                    session.replaceDialog("/About/Courses/CS")
                break;

                case choices[1]:  
                   session.replaceDialog("/About/Courses/IT")
                break;

                case choices[2]:  
                   session.replaceDialog("/About/Courses/IS")
                break;

                default:
                    session.replaceDialog("/");
                break;
            }
        }
    },
    (session, results) => {
        var choices = card.choices(consts.menus.back_menu);
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:                    
                    session.replaceDialog('/Menu');
                break;

                default:
                    session.replaceDialog("/");
                break;
            }
        }
    }
]

module.exports.CS = [
    (session) => {
        session.send(consts.prompts.CS_IICS)                    
        var cardName = card.getName(consts.menus.back_menu);
        var msg = card(session, consts.menus.back_menu, cardName);
        
        builder.Prompts.choice(session, msg, card.choices(consts.menus.back_menu), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.menus.back_menu);
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:                    
                    session.replaceDialog('/Menu');
                break;

                default:
                    session.replaceDialog("/");
                break;
            }
        }
    }
]

module.exports.IT = [
    (session) => {
        session.send(consts.prompts.IT_IICS)
        var cardName = card.getName(consts.menus.back_menu);
        var msg = card(session, consts.menus.back_menu, cardName);
        
        builder.Prompts.choice(session, msg, card.choices(consts.menus.back_menu), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.menus.back_menu);
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        if(results.response == null){
            session.replaceDialog('/')
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:                    
                    session.replaceDialog('/Menu');
                break;

                default:
                    session.replaceDialog("/");
                break;
            }
        }
    }
]

module.exports.IS = [
    (session) => {
        session.send(consts.prompts.IS_IICS)
        var cardName = card.getName(consts.menus.back_menu);
        var msg = card(session, consts.menus.back_menu, cardName);
        
        builder.Prompts.choice(session, msg, card.choices(consts.menus.back_menu), { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var choices = card.choices(consts.menus.back_menu);
        if (results.hasOwnProperty("response")) {
            if (results.response.hasOwnProperty("score")) {
                if (results.response.score < 0.8) {
                    session.replaceDialog('/')
                    return;
                }
            }
        }
        console.log(results.response, "aaa")
        if(results.response == null){
            session.replaceDialog('/')
        }else if(!results.response){
            session.replaceDialog('/')         
        }else{
            var reply = results.response.entity;
            switch(reply){
                case choices[0]:                    
                    session.replaceDialog('/Menu');
                break;

                default:
                    session.replaceDialog("/");
                break;
            }
        }
    }
]