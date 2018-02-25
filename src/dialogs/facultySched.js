const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const request = require('request');
const usersession = require('../helpers/usersession');


module.exports.nextClass = [
    (session, args) => {
        if(!args.firstname) args.firstname = ""
        api.room(session, args.firstname, args.prof, (err, results) => {
            if(results.success){//dagdag kapag walang time si prof
                session.endDialog(format(consts.prompts.GET_STARTED, results.data));
            }
        })

    }
]

module.exports.room = [
    (session, args) => {
        if(args.firstname == undefined) args.firstname = ""
        api.room(session, args.firstname, args.prof, (err, results) => {
            if(results.success){//dagdag kapag walang time si prof
                session.endDialog(format(consts.prompts.GET_STARTED, "at " + results.data));
            }
        })

    }
]