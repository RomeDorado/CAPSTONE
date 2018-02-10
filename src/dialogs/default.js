const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const WIT_TOKEN = "OAC2GWS2OVEXUJV5TUQX5FIDJ2F466EH"
const {Wit, log} = require('node-wit');
module.exports =
[
    (session, args, next) => {
        var answer = session.message.text
        if(answer.includes("/")){
            session.replaceDialog("/Rating", answer);
        }else{
        
            api.checkUser(session, (err, res) => {
                if(!res.d.onSupport){      

                    console.log(session.message.user.name);
                    var entity = args || session.message.text;
                    const client = new Wit({accessToken: WIT_TOKEN});

                        client.message(entity, {})
                        .then((data) => {
                            var results = data;
                            var entities = results.entities;
                                console.log(JSON.stringify(entities));
                                if(entities.intent == (null || undefined)){
                                    //send tix?
                                    }else{
                                        var intent = entities.intent[0].value;
                                    }

                                console.log(intent);
                                if(('professor' in entities)){var professor = entities.professor[0].value;}
                                if(('time' in entities)){var time = entities.time[0].value;}
                                    // if(('inquiry_type' in entities)){var inquiry_type = entities.inquiry_type[0].value;}
                                    // if(('emotion_type' in entities)){var emotion_type = entities.emotion_type[0].value;}
                                getWitIntents(intent, professor, time, session);

                        })
                        .catch(console.error)
                }

            });
        }
    }
]



function getWitIntents(intent, professor, time, session){
    switch(intent){

        case 'get_greetings':            
            session.replaceDialog('/Replies', intent);
        break;

        case 'get_menu':
            session.beginDialog('/mainMenu');
        break;

        case 'get_inquiry_it_about_general':
            session.replaceDialog('/Replies', intent);
        break;

        case 'get_inquiry_it_about_chair':
        session.replaceDialog('/Replies', intent);
        break;

        case 'get_inquiry_it_about_netsec':
            session.replaceDialog('/Replies', intent);
        break;

        case 'get_inquiry_it_about_webdev':
        session.replaceDialog('/Replies', intent);
        break;        

        case 'get_inquiry_it_about_robotics':
            session.replaceDialog('/Replies', intent);
        break;

        case 'get_inquiry_cs_about_general':
        session.replaceDialog('/Replies', intent);
        break;

        case 'get_inquiry_cs_about_chair':
            session.replaceDialog('/Replies', intent);
        break;

        case 'get_inquiry_cs_about_corecs':
        session.replaceDialog('/Replies', intent);
        break;

        case 'get_inquiry_cs_about_gamedev':
        session.replaceDialog('/Replies', intent);
        break;

        case 'get_inquiry_cs_about_datasci':
        session.replaceDialog('/Replies', intent);
        break;        
        
        case 'get_inquiry_is_about_general':
        session.replaceDialog('/Replies', intent);
        break;

        case 'get_inquiry_is_about_chair':
        session.replaceDialog('/Replies', intent);
        break;     
        
        case 'get_inquiry_is_about_ba':
        session.replaceDialog('/Replies', intent);
        break;

        case 'get_inquiry_is_about_sm':
        session.replaceDialog('/Replies', intent);
        break;
        
        case 'get_inquiry_iics_about_general':
        session.replaceDialog('/Replies', intent);
        break;

        case 'get_inquiry_iics_about_history':
        session.replaceDialog('/Replies', intent);
        break;
        
        case 'get_inquiry_iics_about_vision':
        session.replaceDialog('/Replies', intent);
        break;

        case 'get_inquiry_iics_about_mission':
        session.replaceDialog('/Replies', intent);
        break;
        
        case 'get_inquiry_administrators':
        session.replaceDialog('/Replies', intent);
        break;

        case 'get_inquiry_iics_director':
        session.replaceDialog('/Replies', intent);
        break;
        
        case 'get_inquiry_iics_regent':
        session.replaceDialog('/Replies', intent);
        break;

        case 'get_inquiry_iics_secretary':
        session.replaceDialog('/Replies', intent);
        break;
        
        case 'get_inquiry_iics_chairpersons':
        session.replaceDialog('/Replies', intent);
        break;

        case 'get_inquiry_iics_supportstaff':
        session.replaceDialog('/Replies', intent);
        break;        

        case 'get_farewell':
            session.send(' Just hit me up whenever you need me :)');
        break;

        case 'get_compliment':
            let randomcomp = [ 'Aww, thanks! Appreciate it!',
                                '🙈🙈🙈' ];
            let replycomp = randomcomp[Math.floor(Math.random() * randomcomp.length)];
            session.send(replycomp);
        break;

        case 'get_thanks':
            session.send('No biggie! See you at IICS BOT!');
        break;

        case 'get_profanity':
            let randomprof = ['Hey! Sorry for whatever prompted you to say that. To make your experience better, why not party with us at IICS BOT? :)',
                              '💩💩💩',
                            'Duuuuude!',
                          'Ey dude, that\'s not cool!'];
            let replyprof = randomprof[Math.floor(Math.random() * randomprof.length)];
            session.send(replyprof);
        break;

        case 'get_apology':
            let randomapo = ['Don\'t worry about it!',
                              'No worries!',
                            'It\'s ayt, bruh!'];
            let replyapo = randomapo[Math.floor(Math.random() * randomapo.length)];
            session.send(replyapo);
        break;

        case "get_emotions":
            switch(emotion_type){
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
        break;

        case 'get_document_status':
            //dialog docu
            session.replaceDialog('/Documents');
        break;
        
        case 'get_about':
            //about iics
        break;

        case 'get_help':
        //trigger tix or live chat
        break;

        default:
        //do you want to send a tix
        session.replaceDialog('/Confusion');
        break;

        break;
    }
}
