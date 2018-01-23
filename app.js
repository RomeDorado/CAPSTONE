const restify = require('restify');
const builder = require('botbuilder');
const usersession = require('./src/helpers/usersession');
/**Dialogs*/
const dialogs = require('./src/dialogs');
const api = require('./src/helpers/apiRequest')

//=========================================================
// Bot Setup
//=========================================================

/**Create chat bot*/
const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
const bot = new builder.UniversalBot(connector);

//=========================================================
// Bots Middleware
//=========================================================
bot.use(builder.Middleware.dialogVersion({ version: 1.0, resetCommand: /^reset/i }));
bot.use(builder.Middleware.sendTyping());
// Middleware for logging

bot.use({
    receive: function (event, next) {
        logUserConversation(event, "inbound");
        next();
    },
    send: function (event, next) {
        logUserConversation(event, "outbound");
        next();
    }
});

//Update session upon receive/send
const logUserConversation = (event, type) => {
    // api.checkUser(event, function (err, res) {
        var options = {
            method: 'GET',
            url: 'https://iics-usersessions.herokuapp.com/api/bot/user/getuser',
            headers: 
            {
                'authorization-token': 'eyJhbGciOiJIUzI1NiJ9.c2FtcGxlVG9rZW4.F2vUteLfaWAK9iUKu1PRZnPS2r_HlhzU9NC8zeBN28Q',
                'content-type': 'application/json' 
            },
            qs:{
                    client: "iics",                
                    fb_id: event.message.address.user.id,                           
            },       
            json: true  
            };
    
            request(options, function (error, response, body) {               
            if (error) throw new Error(error);          
            console.log(body)      
                if(response.body.d.onSupport == true){
                            
                    console.log("naglog");
                    if (event.type == "message" && event.text) {
                        var params = {};
                            params = {
                                fb_id: event.message.address.user.id,
                                message_body: {
                                    message: event.text,
                                    message_type: type,
                                }
                            };
                        console.log("intercept is working");                
                        usersession.newMessageFromBot(params);
                    }
        }
    });
    next();
}

//=========================================================
// Bot's Dialogs
//=========================================================

bot.dialog('/', dialogs.default);
bot.dialog('/GetStarted', dialogs.getStarted).triggerAction({matches:/^started|get started|start over|get started|hi|hello|Get_Started/i});
bot.dialog('/Unsub', dialogs.unsub.main).triggerAction({matches:/Unsubscribe/i});;
bot.dialog('/UnsubConfirm', dialogs.unsub.unsubconfirm);
bot.dialog('/Menu', dialogs.menu).triggerAction({matches:/^menu|main menu|Main menu/i});
bot.dialog('/Subscribe', dialogs.subscribe);
bot.dialog('/Confusion', dialogs.confusion);
bot.dialog('/Ticket', dialogs.ticket);
bot.dialog('/Replies', dialogs.replies);
bot.dialog('/CheckAccess', dialogs.checkAccess);
bot.dialog('/FacultyInquiry', dialogs.facInq);
bot.dialog('/Announcements', dialogs.announcements.main).triggerAction({matches:/Announcements/i});
bot.dialog('/depAnnouncements', dialogs.announcements.department).triggerAction({matches:/Department-announcement/i});
bot.dialog('/genAnnouncements', dialogs.announcements.general).triggerAction({matches:/General-announcement/i});
bot.dialog('/Documents', dialogs.checkDocu);
bot.dialog('/Livechat', dialogs.livechat).triggerAction({matches:/livechat/i});
//=========================================================
// Server Setup
//=========================================================

const server = restify.createServer();

/**Endpoint for incoming messages*/
server.post('/api/messages', connector.listen());

/**Start listening on 3978 by default*/
server.listen(process.env.port || process.env.PORT || 4001, () => {
    console.log('Restify listening to port: %s', server.url);
});

var http = require("http");
setInterval(function () {
    http.get(process.env.heroku);
}, 300000);