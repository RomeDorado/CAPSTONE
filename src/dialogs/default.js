const builder = require('botbuilder');
const format = require('string-format');
const api = require('../helpers/apiRequest');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const WIT_TOKEN = "OAC2GWS2OVEXUJV5TUQX5FIDJ2F466EH"
module.exports = 
[
    (session, args, next) => {
        
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
                

                if(('inquiry_type' in entities)){var inquiry_type = entities.inquiry_type[0].value;}
                if(('emotion_type' in entities)){var emotion_type = entities.emotion_type[0].value;}
                getWitIntents(intent, inquiry_type, emotion_type, session);
            
        })
        .catch(console.error)
  
    }
]



function getWitIntents(intent, inquiry_type, emotion_type, session){        
    switch(intent){

        case 'get_greetings':
            let random = [ 'Hey! Welcome to IICS Bot! How may I help you?',
                                'Heeyy!! What can I do for you today?',
                              'Sup! What can I do for you today?'];
            let reply = random[Math.floor(Math.random() * random.length)];
            session.send(reply);
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

        
                case 'get_about':
                    //about iics
                break;

                case 'get_help':
                //trigger tix or live chat
                break;

                default:
                //do you want to send a tix
                break;
        
        break;        
    }
}