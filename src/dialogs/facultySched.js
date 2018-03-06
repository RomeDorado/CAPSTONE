const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const request = require('request');
const usersession = require('../helpers/usersession');

//TO DO: if beyond 9am or it's sunday


module.exports.nextClass = [
    (session, args) => {
        var profs = []
        try {
            console.log('went down here')
            api.nextClass(session, args.firstname, args.prof, args.datetime, (err, results) => {
                console.log(results, "asd")
                if (results.success) {
                    //dagdag kapag walang time si prof                
                    if (results.data instanceof Array) {
                        profs = results.data.map((val, index) => {
                            return {
                                name: index,
                                title: val.firstname,
                                button: [
                                    { msg: val.firstname + '=' + val.lastname, title: "Select" }
                                ]
                            }
                        })

                        var cardName = card.getName(profs);
                        var msg = card(session, profs, cardName);

                        builder.Prompts.choice(session, msg, card.choices(profs), { maxRetries: 0, promptAfterAction: false });

                    } else {
                        session.endConversation(format(consts.prompts.PROF_NEXT, " " + results.data));
                    }
                } else {
                    session.endConversation(results.data);
                }
            })
        } catch (exception) {
            // api.nextClass(session, "", args.prof, (err, results) => {
            //     if (results.success) {//dagdag kapag walang time si prof
            //         console.log(results, "catch")
            //         if (results.data instanceof Array) {
            //             profs = results.data.map((val, index) => {
            //                 return {
            //                     name: index,
            //                     title: val.firstname,
            //                     button: [
            //                         { msg: val.firstname + '/' + val.lastname, btn_title: val.firstname }
            //                     ]
            //                 }
            //             })

            //             var cardName = card.getName(profs);
            //             var msg = card(session, profs, cardName);

            //             builder.Prompts.choice(session, msg, card.choices(profs), { maxRetries: 0, promptAfterAction: false });

            //         } else {
            //             session.endConversation(format(consts.prompts.PROF_NEXT, " " + results.data));
            //         }
            //     }
            // })
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
        if (results.response == null) {
            session.replaceDialog('/');
        } else {
            console.log(results)
            var reply = results.response.entity;
            var firstname = reply.split("=")[0];
            var lastname = reply.split("=")[1];

            api.nextClass(session, firstname, lastname, (err, results) => {
                if(results.success){
                    session.endConversation(format(consts.prompts.PROF_NEXT, results.data));
                }else{
                    session.endConversation(results.data);
                }
                
            })
        }
    }
]

module.exports.room = [
    (session, args) => {
        console.log(args, 'args sched')
        try {
            console.log('went down here')
            api.room(session, args.firstname, args.prof, args.datetime, (err, results) => {
                console.log(results, "asd")
                if (results.success) {
                    //dagdag kapag walang time si prof
                    if (results.data instanceof Array) {
                        profs = results.data.map((val, index) => {
                            return {
                                name: index,
                                title: val.firstname,
                                button: [
                                    { msg: val.firstname + '=' + val.lastname, title: "Select" }
                                ]
                            }
                        })

                        var cardName = card.getName(profs);
                        var msg = card(session, profs, cardName);

                        builder.Prompts.choice(session, msg, card.choices(profs), { maxRetries: 0, promptAfterAction: false });

                    } else {
                        session.endConversation(format(consts.prompts.PROF_ROOM, results.data));
                    }
                } else {
                    //if no class or no prof
                    session.endConversation(results.data);
                }
            })
        } catch (exception) {
            // api.room(session, "", args.prof, (err, results) => {
            //     if (results.success) {//dagdag kapag walang time si prof
            //         console.log(results, "catch")
            //         session.session.endConversation(format(consts.prompts.PROF_CURRENT_CLASS, results.data));(format(consts.prompts.PROF_ROOM, "at " + results.data));
            //     }
            // })
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
        if (results.response == null) {
            session.replaceDialog('/');
        } else {
            console.log(results)
            var reply = results.response.entity;
            var firstname = reply.split("=")[0];
            var lastname = reply.split("=")[1];

            api.room(session, firstname, lastname, (err, results) => {
                if(results.success){
                    session.endConversation(format(consts.prompts.PROF_NEXT, results.data));
                }else{
                    session.endConversation(results.data);
                }
                
            })
        }
    }
]

module.exports.currentClass = [
    (session, args) => {
        console.log(args, 'args sched')
        try {
            console.log('went down current class')
            api.currentClass(session, args.firstname, args.prof, args.datetime, (err, results) => {
                console.log(results, "asd")
                if (results.success) {
                    //dagdag kapag walang time si prof
                    if (results.data instanceof Array) {
                        profs = results.data.map((val, index) => {
                            return {
                                name: index,
                                title: val.firstname,
                                button: [
                                    { msg: val.firstname + '=' + val.lastname, title: "Select" }
                                ]
                            }
                        })

                        var cardName = card.getName(profs);
                        var msg = card(session, profs, cardName);

                        builder.Prompts.choice(session, msg, card.choices(profs), { maxRetries: 0, promptAfterAction: false });

                    } else {
                        session.session.endConversation(format(consts.prompts.PROF_CURRENT_CLASS, results.data));(format(consts.prompts.PROF_CURRENT_CLASS, results.data));
                    }
                } else {
                    //if no class or no prof
                    session.endConversation(results.data);
                }
            })
        } catch (exception) {
            // api.room(session, "", args.prof, (err, results) => {
            //     if (results.success) {//dagdag kapag walang time si prof
            //         console.log(results, "catch")
            //         session.session.endConversation(format(consts.prompts.PROF_CURRENT_CLASS, results.data));(format(consts.prompts.PROF_ROOM, "at " + results.data));
            //     }
            // })
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
        if (results.response == null) {
            session.replaceDialog('/');
        } else {
            console.log(results)
            var reply = results.response.entity;
            var firstname = reply.split("=")[0];
            var lastname = reply.split("=")[1];

            api.currentClass(session, firstname, lastname, (err, results) => {
                if(results.success){
                    session.endConversation(format(consts.prompts.PROF_CURRENT_CLASS, results.data));
                }else{
                    session.endConversation(results.data);
                }
                
            })
        }
    }
]

module.exports.subjectTime = [
    //kapag what and when hehe
    //kapag what subj gamitin, kapag when, subj date
    (session, args) => {
        console.log(args, 'args sched')
        try {
            if(args.timeOrDay) var timeOrDay =  args.timeOrDay
            if(timeOrDay.toLocaleLowerCase() == "when"){
                subjectDay();
                return;
            }
            console.log('went down sub time class')
            api.subjectTime(session, args.firstname, args.prof, args.datetime, args.section, args.subject, (err, results) => {
                console.log(results, "asd")
                if (results.success) {
                    //dagdag kapag walang time si prof
                    if (results.data instanceof Array) {
                        profs = results.data.map((val, index) => {
                            return {
                                name: index,
                                title: val.firstname,
                                button: [
                                    { msg: val.firstname + '=' + val.lastname + '=' + "what", title: "Select" }
                                ]
                            }
                        })

                        var cardName = card.getName(profs);
                        var msg = card(session, profs, cardName);

                        builder.Prompts.choice(session, msg, card.choices(profs), { maxRetries: 0, promptAfterAction: false });

                    } else {
                        // session.session.endConversation(format(consts.prompts.PROF_CURRENT_CLASS, results.data));(format(consts.prompts.PROF_CURRENT_CLASS, results.data));
                        session.endConversation(results.data);
                    }
                } else {
                    //if no class or no prof
                    session.endConversation(results.data);
                }
            })

            function subjectDay(){
                api.subjectDay(session, args.firstname, args.prof, args.datetime, args.section, args.subject, (err, results) => {
                    console.log(results, "asd")
                    if (results.success) {
                        //dagdag kapag walang time si prof
                        if (results.data instanceof Array) {
                            profs = results.data.map((val, index) => {
                                return {
                                    name: index,
                                    title: val.firstname,
                                    button: [
                                        { msg: val.firstname + '=' + val.lastname + '=' + "when", title: "Select" }
                                    ]
                                }
                            })
    
                            var cardName = card.getName(profs);
                            var msg = card(session, profs, cardName);
    
                            builder.Prompts.choice(session, msg, card.choices(profs), { maxRetries: 0, promptAfterAction: false });
    
                        } else {
                            // session.session.endConversation(format(consts.prompts.PROF_CURRENT_CLASS, results.data));(format(consts.prompts.PROF_CURRENT_CLASS, results.data));
                            session.endConversation(results.data);
                        }
                    } else {
                        //if no class or no prof
                        session.endConversation(results.data);
                    }
                })
            }
                            
        } catch (exception) {
            // api.room(session, "", args.prof, (err, results) => {
            //     if (results.success) {//dagdag kapag walang time si prof
            //         console.log(results, "catch")
            //         session.session.endConversation(format(consts.prompts.PROF_CURRENT_CLASS, results.data));(format(consts.prompts.PROF_ROOM, "at " + results.data));
            //     }
            // })
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
        if (results.response == null) {
            session.replaceDialog('/');
        } else {
            console.log(results)
            var reply = results.response.entity;
            var firstname = reply.split("=")[0];
            var lastname = reply.split("=")[1];
            var choice = reply.split("=")[2];

            if(choice == "what")
            api.subjectTime(session, args.firstname, args.prof, args.datetime, args.section, args.subject, (err, results) => {
                session.endConversation(results.data);
            });
            else{
                api.subjectDay(session, args.firstname, args.prof, args.datetime, args.section, args.subject, (err, results) => {
                    session.endConversation(results.data);
                });
            }
        }
    }
]
