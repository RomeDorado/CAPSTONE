const builder = require('botbuilder');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');
const request = require('request');

module.exports = [
    (session) => {
        api.checkAccess(session.message.address.user.id, (err, res) => {
            if(!res.d.facAccess){
                session.replaceDialog('/FacultyInquiry');
            }else{
                // session.replaceDialog('/FacultyAnswers');
            }
        });
    }
]
