const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const request = require('request');
const usersession = require('../helpers/usersession');


module.exports = [
    (session) => {
        builder.Prompts.text(session, consts.prompts.CHECK_DOCUMENT, { maxRetries:0,promptAfterAction:false});
    },
    (session, results) => {
        var code = results.response;
        api.getDocuStatus(code, (err, res) => {
            // session.send(consts.prompts.STATUS_DOCU + " " + res.data);
        })
    }
]
