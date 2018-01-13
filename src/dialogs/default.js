const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');

module.exports =
[
    (session, args, next) => {

  console.log(session.message.user.name);

let entities = ('nlp' in session.message.sourceEvent.message) ? session.message.sourceEvent.message.nlp.entities : undefined;
console.log(entities)
        //If NLP is Entities present        
        if(entities !== undefined){
            var intent = Object.keys(entities).length != 0 && !(Object.keys(entities).length > 1) ? entities[Object.keys(entities)][0].value : 'default';
        } else {
            var intent = 'default';
        }
                getWitIntents(intent, session);  
    }
]



function getWitIntents(intent, session){
    switch(intent){

        case 'get_greetings':           
            session.replaceDialog('/Replies', intent);
        break;

        case 'get_menu':
            session.beginDialog('/mainMenu');
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
                    session.replaceDialog('/CheckAcess');
                    // session.replaceDialog('/FacultyInquiry')
                break;

                case 'get_document_status':
                    //dialog docu
                break;
                case 'get_about':
                    //about iics
                break;

                case 'get_help':
                //trigger tix or live chat
                break;

                case 'default':
                session.replaceDialog('/Confusion');
                break;

                default:
                //do you want to send a tix
                session.replaceDialog('/Confusion');
                break;

        break;
    }
}
