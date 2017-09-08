const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');


module.exports =
    [
        (session) => {
            session.send(consts.prompts.GET_STARTED);
            session.beginDialog('/Menu')
        }
    ]