const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');
const request = require('request');
const moment = require('moment-timezone');
const usersession = require('../helpers/usersession');

module.exports = [
    async (session) => {        
        api.userProfile(session.message.user.id, 'first_name', async (err, res) => {
            if (!err) {
                    await api.createProfanity(session, res.first_name);            
            }
        });
        
    }
]

