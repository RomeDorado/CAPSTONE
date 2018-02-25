const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const request = require('request');
const usersession = require('../helpers/usersession');


module.exports.nextClass = [
    (session, args) => {
        try {
            console.log('went down here')
            api.nextClass(session, args.firstname, args.prof, (err, results) => {
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