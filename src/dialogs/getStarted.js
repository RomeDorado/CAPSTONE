const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');



module.exports =
    [
        (session) => {
            api.userProfile(session.message.user.id, 'first_name', (err, res) => {
                if (!err) {
                    session.send(format(consts.prompts.GET_STARTED, res.first_name));
                    session.beginDialog('/Menu')
                }
            });
        }
    ]