const builder = require('botbuilder');
const format = require('string-format');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const api = require('../helpers/apiRequest');
const request = require('request');


module.exports = [
        (session) => {
            session.send("You can ask the following inquiries: ")
            session.endConversation(`Who is the director
            Who is the regent
            Who is the secretary
            Who are the administrators
            Who are the staff
            who are the department chairs
            who is the IT chair
            Who is the CS chair
            Who is the IS chair
            What is IICS
            What is the IICS History
            What is the mission of IICS
            What is the vision of IICS
            What is IT
            What is IS
            What is CS
            What is NetSec
            What is Webdev
            What is automation
            What is System Managment
            What is Business Analytics
            What is Core CS
            What is Game Dev
            What is Data Science
            How much is the IT tuition
            How much is the CS tuition
            How much is the IS tuition
            How to enroll
            How to shift
            How to get second degree
            How to contact IICS
            Where is IICs`);
        }
    ]