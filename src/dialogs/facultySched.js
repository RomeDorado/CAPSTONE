const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const request = require('request');
const usersession = require('../helpers/usersession');


module.exports.nextClass = [
    (session, args) => {
        var profs = []
        try {
            console.log('went down here')
            api.nextClass(session, args.firstname, args.prof, (err, results) => {
                console.log(results, "asd")
                if (results.success) {
                    //dagdag kapag walang time si prof                
                    if (results.data instanceof Array) {
                        profs = results.data.map((val, index) => {
                            return {
                                name: index,
                                title: val.firstname,
                                button: [
                                    { msg: val.firstname + '/' + val.lastname, title: "Select" }
                                ]
                            }
                        })

                        var cardName = card.getName(profs);
                        var msg = card(session, profs, cardName);

                        builder.Prompts.choice(session, msg, card.choices(profs), { maxRetries: 0, promptAfterAction: false });

                    } else {
                        session.endConversation(format(consts.prompts.PROF_NEXT, " " + results.data));
                    }
                    // session.endConversation(format(consts.prompts.PROF_NEXT, " " + results.data));                                
                }
            })
        } catch (exception) {
            api.nextClass(session, "", args.prof, (err, results) => {
                if (results.success) {//dagdag kapag walang time si prof
                    console.log(results, "catch")
                    if (results.data instanceof Array) {
                        profs = results.data.map((val, index) => {
                            return {
                                name: index,
                                title: val.firstname,
                                button: [
                                    { msg: val.firstname + '/' + val.lastname, btn_title: val.firstname }
                                ]
                            }
                        })

                        var cardName = card.getName(profs);
                        var msg = card(session, profs, cardName);

                        builder.Prompts.choice(session, msg, card.choices(profs), { maxRetries: 0, promptAfterAction: false });

                    } else {
                        session.endConversation(format(consts.prompts.PROF_NEXT, " " + results.data));
                    }
                }
            })
        }
    },
    (session, args, results) => {
        if (results.response == null) {
            session.replaceDialog('/');
        } else {
            console.log(results.response)
            var reply = results.response.entity;
            var firstname = reply.split["/"][0];
            var lastname = reply.split["/"][1];
            
            api.nextClass(session, firstname, lastname, (err, results) => {
                session.endConversation(format(consts.prompts.PROF_NEXT, " " + results.data));            
            })
        }
    }
]

module.exports.room = [
    (session, args) => {
        console.log(args, 'args sched')
        try {
            console.log('went down here')
            api.room(session, args.firstname, args.prof, (err, results) => {
                console.log(results, "asd")
                if (results.success) {
                    //dagdag kapag walang time si prof
                    session.endDialog(format(consts.prompts.PROF_ROOM, "at " + results.data));
                }
            })
        } catch (exception) {
            api.room(session, "", args.prof, (err, results) => {
                if (results.success) {//dagdag kapag walang time si prof
                    console.log(results, "catch")
                    session.endDialog(format(consts.prompts.PROF_ROOM, "at " + results.data));
                }
            })
        }

    }
]