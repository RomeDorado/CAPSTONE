const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');
const request = require('request');
const moment = require('moment-timezone');

module.exports = [
    (session) => {
        builder.Prompts.text(session, consts.prompts.ENTER_INQUIRY, {maxRetries:0,promptAfterAction:false});
    },
    (session, results, callback) => {

        var now = moment();
        console.log(session.message);
        var user = session.message.sourceEvent.sender.id;
        var name = session.message.user.name;
        var time = now.tz('Asia/Taipei').format();

        var options = {
            method: 'Post',
            url: 'https://iics-ticketing-api.herokuapp.com/api/tickets',
            qs:{
                client: "iics",
            },
            body: {
                name: name,
                fb_id: user,
                client: "iics",
                inquiry: results.response,
                inquiry_date: time,
                status: "OPEN",
                page_access_token: "EAAB9PiSvUjYBACd1pxUKfJ6O0BavAgqio64N4h33dZBvNVJQ6v8mBGJDe2A5JoP7KIckBivgQuMDCZA0YXVRs2A3E3jcxSj2Ubjmm3rzoZAOalKR3yaYGLrCPcIgZB19KcHx0QYnsaFf1FygzZAu8cNZAHkKusrSaDrZClwSxUWXAZDZD"
            },
            json: true
            };

        request(options, function (error, response, body) {
            if (error) console.log(error);
        });;
    }
]
