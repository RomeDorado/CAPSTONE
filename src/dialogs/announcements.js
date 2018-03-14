const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const request = require('request');
const usersession = require('../helpers/usersession');
const moment = require("moment")

module.exports.main = [
    (session) => {
        var cardName = card.getName(consts.menus.announcements_menu);
        var msg = card(session, consts.menus.announcements_menu, cardName);
        session.send("Please select from these categories:");
        builder.Prompts.choice(session, msg, card.choices(consts.menus.announcements_menu), { maxRetries: 0, promptAfterAction: false });
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
        var choices = card.choices(consts.menus.announcements_menu);
        if (results.response == null) {
            session.replaceDialog('/')
        } else {
            var reply = results.response.entity;
            switch (reply) {
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
    (session, args) => {
        api.checkUser(session, (err, res) => {
            if (res.d.department == "unset") {
                session.replaceDialog('/noDepAnnouncements');
            }
            else {
                var start = moment().format('D');
                var end = moment(args).format('D');

                console.log(start+ " " + end,args, "dddd")
                console.log(args, "daaaa")
                //I can only fetch you announcements within 7 days max
                if ((start - end) < 0) {
                    session.endConversation("I can only fetch you announcements within 7 days max")
                } else if ((start - end) > 7) {
                    session.endConversation("I can only fetch you announcements within 7 days max")
                } else {
                    
                    var options = {
                        method: 'GET',
                        url: 'https://iics-blast-service.herokuapp.com/api/cms/blast/getDepAnnouncements',
                        headers:
                            {
                                'authorization-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                                'content-type': 'application/json'
                            },
                        qs: {
                            client: "iics",
                            fb_id: session.message.address.user.id,
                            endDate: args
                        },
                        json: true
                    };

                    request(options, function (error, response, body) {
                        if (error) throw new Error(error);

                        var index = 0;
                        // if (typeof body.d[index] == 'undefined'){
                            cons.log(body)
                        if (typeof body.d == 'undefined' || !body.d[0]) {
                            console.log("null ang body")
                            session.endConversation(consts.prompts.NO_DEPARTMENT_ANNOUNCEMENTS);

                        } else {
                            session.send(consts.prompts.NEW_DEPARTMENT);
                            for (var x = 0; x < body.d.length; x++) {
                                var date = new Date(body.d[x].datetime).toDateString()

                                session.send(format(consts.prompts.DEPARTMENT_ANNOUNCEMENTS, date));
                                session.send(body.d[x].announcements);
                                if (body.d[x].image != 'undefined') {
                                    console.log(body.d[x].image, "image")
                                    var img = new builder.Message(session)
                                        .addAttachment({
                                            contentURL: body.d[x].image,
                                            contentType: 'image/jpg',
                                        });
                                    session.send(img);
                                }
                            }

                        }
                    });
                }
            }//end else
        });
        session.endConversation();
    }
]


module.exports.general = [
    (session) => {
        var options = {
            method: 'GET',
            url: 'https://iics-blast-service.herokuapp.com/api/cms/blast/getGenAnnouncements',
            headers:
                {
                    'authorization-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                    'content-type': 'application/json'
                },
            qs: {
                client: "iics",
                fb_id: session.message.address.user.id,
            },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            var index = 0;
            console.log(body.d)
            // if (typeof body.d[index] == 'undefined'){
            if (!body.d[0]) {
                session.endConversation(consts.prompts.NO_GENERAL_ANNOUNCEMENTS);
            } else {
                for (var x = 0; x < body.d.length; x++) {
                    var date = new Date(body.d[x].datetime).toDateString()

                    session.send(format(consts.prompts.GENERAL_ANNOUNCEMENTS, date));
                    session.send(body.d[x].announcements);
                    if (body.d[x].image != 'undefined') {
                        console.log(body.d[x].image, "image")
                        var img = new builder.Message(session)
                            .addAttachment({
                                contentURL: body.d[x].image,
                                contentType: 'image/jpg',
                            });
                        session.send(img);
                    }
                }
            }
        });
        session.endConversation();
    }
]

module.exports.noDepartment = [
    (session, args) => {
        if (args == undefined) {
            builder.Prompts.text(session, consts.prompts.NO_DEPARTMENT, { maxRetries: 0, promptAfterAction: false });
        }
        else {
            builder.Prompts.text(session, consts.prompts.DEPARTMENT_SECOND, { maxRetries: 0, promptAfterAction: false });
        }
    },
    async (session, results) => {
        var email = results.response;

        var domain = email.split("@");

        if (domain[1] == "ust-ics.mygbiz.com" || (email.includes("iics") && domain[1] == "ust.edu.ph")) {
            api.checkEmail(session, email, (err, res) => {
                if (res.success) {
                    var department = res.data[0].Department;
                    var stringDep = "";
                    var nameAllCaps = res.data[0].First_Name + " " + res.data[0].Last_Name
                    var nameConvert = nameAllCaps.toLowerCase();
                    var name = nameConvert.replace(/(^|\s)[a-z]/g, function (f) { return f.toUpperCase(); });
                    if (department == "IT") stringDep = "Information Technology Department"
                    if (department == "CS") stringDep = "Computer Science Department"
                    if (department == "IS") stringDep = "Information Systems Department"
                    // await usersession.createUserNoSub(session, dep);      
                    usersession.createUserNoSub(session, department, email);
                    session.endDialog(format(consts.prompts.VERIFIED_EMAIL_ANNOUNCEMENT, name, stringDep));
                    session.replaceDialog('/depAnnouncements')

                } else {
                    console.log("wrong email format")
                    session.send(consts.prompts.INVALID_EMAIL);
                    var cardName = card.getName(consts.menus.enter_email);
                    var msg = card(session, consts.menus.enter_email, cardName);
                    builder.Prompts.choice(session, msg, card.choices(consts.menus.enter_email), { maxRetries: 0, promptAfterAction: false });
                }
            });


        } else {
            console.log("wrong email format")
            session.send(consts.prompts.INVALID_EMAIL);
            var cardName = card.getName(consts.menus.enter_email);
            var msg = card(session, consts.menus.enter_email, cardName);
            builder.Prompts.choice(session, msg, card.choices(consts.menus.enter_email), { maxRetries: 0, promptAfterAction: false });
        }
    }
]