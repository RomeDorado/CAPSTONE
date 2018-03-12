const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const WIT_TOKEN = "OAC2GWS2OVEXUJV5TUQX5FIDJ2F466EH"
const { Wit, log } = require('node-wit');
const request = require('request');
module.exports =
    [
        (session, args, next) => {
            var answer = session.message.text
            if (answer.includes("/")) {
                session.replaceDialog("/Rating", answer);
            } else {
                api.checkUser(session, (err, res) => {
                    if (!res.d.onSupport) {//false unsupport
                        witAPI(session)
                        
                    }else{// if true onsupp
                        api.access(session, (err, res) => {
                            if (!res.d.access) {//false access
                                witAPI(session)
                            }else{
                                return;
                            }
                        });
                    }

                });
            }
        }


    ]

function witAPI(session) {
    var entity = session.message.text;
    const client = new Wit({ accessToken: WIT_TOKEN });

    client.message(entity, {})
        .then((data) => {
            var results = data;
            var entities = results.entities;
            console.log(JSON.stringify(entities));
            if (entities.intent == (null || undefined)) {
                //send tix?
            } else {
                var intent = entities.intent[0].value;
            }

            console.log(intent);
            if (('professor' in entities)) { var professor = entities.professor[0].value; }
            if (('firstname' in entities)) { var firstname = entities.firstname[0].value; }
            if (('datetime' in entities)) { var datetime = entities.datetime[0].value; }
            if (('datetime' in entities)) {
                var obj = entities.datetime[0].values[0]
                if (obj.hasOwnProperty("from")) {
                    var endDate = entities.datetime[0].values[0].from.value;
                }
            }
            if (('time' in entities)) { var time = entities.time[0].value; }
            if (('section' in entities)) { var section = entities.section[0].value; }
            if (('class' in entities)) { var subject = entities.class[0].value; }
            if (('timeOrDay' in entities)) { var timeOrDay = entities.timeOrDay[0].value; }
            // if(('inquiry_type' in entities)){var inquiry_type = entities.inquiry_type[0].value;}
            // if(('emotion_type' in entities)){var emotion_type = entities.emotion_type[0].value;}
            getWitIntents(intent, professor, time, session, firstname, datetime, section, subject, timeOrDay, endDate);

        })
        .catch(console.error)
}


async function getWitIntents(intent, professor, time, session, firstname, datetime, section, subject, timeOrDay, endDate) {
    switch (intent) {

        case 'get_greetings':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_menu':
            session.beginDialog('/mainMenu');
            break;

        case 'get_inquiry_IT_about_general':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IT_about_chair':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IT_about_netsec':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IT_about_webdev':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IT_about_robotics':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_CS_about_general':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_CS_about_chair':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_CS_about_corecs':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_CS_about_gamedev':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_CS_about_datasci':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IS_about_general':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IS_about_chair':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IS_about_ba':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IS_about_sm':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_about_general':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_about_history':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_about_vision':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_about_mission':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_administrators':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_director':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_regent':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_secretary':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_chairpersons':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_supportstaff':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_contact':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_location':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IT_tuition':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IS_tuition':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_CS_tuition':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_shifter':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_transferee':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_seconddegree':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_enrollment':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_petition':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_prelimschedule':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_finalsschedule':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_about_visionmission':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_calendar':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_inquiry_IICS_departments':
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_who_i':
            session.replaceDialog('/Who');
            break;

        case 'get_who_you':
            session.replaceDialog('/Who/You');
            break;

        case 'get_farewell':
            session.send(' Just hit me up whenever you need me :)');
            break;

        case 'get_compliment':
            let randomcomp = ['Aww, thanks! Appreciate it!',
                '🙈🙈🙈'];
            let replycomp = randomcomp[Math.floor(Math.random() * randomcomp.length)];
            session.send(replycomp);
            break;

        case 'get_thanks':
            session.send('No biggie! See you at IICS BOT!');
            break;

        case 'get_profanity':
            
        var options = {
            method: 'GET',
            url: 'https://iics-usersessions.herokuapp.com/api/bot/user/getuser',
            headers:
                {
                    'API-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiSGpaTGVJYlRtRlpzNlRTR0lDUE1lNU9FdVA0OFJDSXIiLCJkYXRhIjp7Il9pZCI6IjVhNTA4YWE5NzYxYTY3MDAxNDA1ODliNCIsInVzZXJuYW1lIjoiaWljc19hZG1pbjEyMyIsImVtYWlsIjoic2FtcGxlIiwiaGFwcHkiOjIwLCJzYWQiOjMsInBlcm1pc3Npb24iOiJBZG1pbiIsIm5hbWUiOnsiZmlyc3QiOiJJSUNTIiwibGFzdCI6IkFkbWluIn19LCJleHBpcmVJbiI6IjI0aCIsImlhdCI6MTUyMDE0OTg3MH0.A8jv7Gbqe61vfF3e1rdzrONbN0arB8vAEaNA6w509h8',
                    'content-type': 'application/json'
                },
            qs: {
                client: "iics",
                fb_id: session.message.address.user.id,
            },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);            
            api.createProfanity(session, body.d.email);
            
        });
            session.replaceDialog('/Replies', intent);
            break;

        case 'get_apology':
            let randomapo = ['Don\'t worry about it!',
                'No worries!',
                'It\'s ayt, bruh!'];
            let replyapo = randomapo[Math.floor(Math.random() * randomapo.length)];
            session.send(replyapo);
            break;

        case "get_emotions":
            switch (emotion_type) {
                case 'happy':
                    let randomhappy = ['LOL!!!',
                        'Hahahahhahahahaha!',
                        '😂😂😂'];
                    let replyhappy = randomhappy[Math.floor(Math.random() * randomhappy.length)];
                    session.send(replyhappy);
                    break;

                default:
                    session.send("Hey! Sorry, but I didn't quite understand what you said. In the mean time, you may contact us through the following:\n For event bookings & inquiries, text or Viber us: 09159657715 or 09166387666 \n E-mail: housemanilaph@gmail.com                                                                                                                                                  Table reservations: reservation@housemanila.com \n You can also type “Menu” to find out the other cool things I can do for you!");
                    break;
            }
            break;

        case 'get_faculty_inquiry':
            session.replaceDialog('/CheckAccess');
            // session.replaceDialog('/FacultyInquiry')
            break;//madadagdagan ito hehe

        case 'get_next_class':
            if (firstname) session.replaceDialog('/CheckAccess', { intent: intent, prof: professor, firstname: firstname, datetime: datetime });
            else session.replaceDialog('/CheckAccess', { intent: intent, prof: professor, datetime: datetime });

            break;

        case 'get_faculty_room':
            if (firstname) session.replaceDialog('/CheckAccess', { intent: intent, prof: professor, firstname: firstname, datetime: datetime });
            else session.replaceDialog('/CheckAccess', { intent: intent, prof: professor, datetime: datetime });
            break;

        case 'get_faculty_currentclass':
            if (firstname) session.replaceDialog('/CheckAccess', { intent: intent, prof: professor, firstname: firstname, datetime: datetime });
            else session.replaceDialog('/CheckAccess', { intent: intent, prof: professor, datetime: datetime });
            break;

        case 'get_faculty_subject_time':
            if (firstname) session.replaceDialog('/CheckAccess', { intent: intent, prof: professor, firstname: firstname, datetime: datetime, section: section, subject: subject, timeOrDay: timeOrDay });
            else session.replaceDialog('/CheckAccess', { intent: intent, prof: professor, datetime: datetime, section: section, subject: subject, timeOrDay: timeOrDay });
            break;


        case 'get_document_status':
            //dialog docu
            session.replaceDialog('/Documents');
            break;

        case 'get_menu_subscribe':
            session.replaceDialog('/Subscribe');
            break;

        case 'get_menu_unsubscribe':
            session.replaceDialog('/UnsubConfirm');
            break;

        case 'get_announcements':
            session.replaceDialog('/depAnnouncements');
            break;

        case 'get_general_announcements':
            session.replaceDialog('/genAnnouncements');
            break;

        case 'get_department_announcements':
        console.log(endDate, "end");
        console.log(datetime, "datetime");
            if (endDate) {
                session.replaceDialog('/depAnnouncements', endDate);
            } else if (datetime) {
                session.replaceDialog('/depAnnouncements', datetime);
            }

            break;

        case 'get_help':
            //trigger tix or live chat
            break;

        default:
            //do you want to send a tix
            session.replaceDialog('/Confusion');
            break;

            break;

            async function email(){
                console.log("andito")
                api.checkUser(session, (err, res) => {
                    console.log(res, "reasdad")
                    return new Promise((resolve, reject) => {
                        if(res.d.email){
                            resolve(res.d.email);
                        }else{
                            reject(err);
                        }
                    })
                });
            }
            
    }
}
