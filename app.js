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
    receive: async function (event, next) {
        await logUserConversation(event, "inbound");
        next();
    },
    send: async function (event, next) {
        await logUserConversation(event, "outbound");
        next();
    }
});

//Update session upon receive/send
async function logUserConversation (event, type) {
            if (event.type == "message" && event.text) {
                // console.log(event);
                var params = {
                        fb_id: event.address.user.id,
                        message_body: {
                            message: event.text,
                            message_type: type,
                        }
                    };                
                console.log("intercept is working");                
                usersession.newMessageFromBot(params);
            }        
}

//=========================================================
// Bot's Dialogs
//=========================================================

bot.dialog('/', dialogs.default);
bot.dialog('/GetStarted', dialogs.getStarted).triggerAction({matches:/^started|get started|start over|get started|Get_Started/i});
bot.dialog('/Unsub', dialogs.unsub.main).triggerAction({matches:/Unsubscribe/i});
bot.dialog('/UnsubConfirm', dialogs.unsub.unsubconfirm)
bot.dialog('/Menu', dialogs.menu).triggerAction({matches:/^menu|main menu|Main menu|main_menu/i});
bot.dialog('/Subscribe', dialogs.subscribe).triggerAction({matches:/Subscribe/i});
bot.dialog('/Confusion', dialogs.confusion);
bot.dialog('/Ticket', dialogs.ticket).triggerAction({matches:/^send_ticket|send a ticket|Send a ticket|ticket/i});
bot.dialog('/Replies', dialogs.replies);
bot.dialog('/CheckAccess', dialogs.checkAccess);
bot.dialog('/FacultyInquiry', dialogs.facInq);
bot.dialog('/Announcements', dialogs.announcements.main).triggerAction({matches:/Announcements-button/i});
bot.dialog('/depAnnouncements', dialogs.announcements.department).triggerAction({matches:/Department-announcement/i});
bot.dialog('/noDepAnnouncements', dialogs.announcements.noDepartment).triggerAction({matches:/Select-department-announcement/i});
bot.dialog('/genAnnouncements', dialogs.announcements.general).triggerAction({matches:/General-announcement/i});
bot.dialog('/Documents', dialogs.checkDocu);
bot.dialog('/Livechat', dialogs.livechat).triggerAction({matches:/livechat/i});
bot.dialog('/Rating', dialogs.rating.happy);
bot.dialog('/Rating/Sad', dialogs.rating.sad);
bot.dialog('/About', dialogs.about.main).triggerAction({matches:/About_IICS/i});
bot.dialog('/About/IICS', dialogs.about.about).triggerAction({matches:/What_is_iics/i});
bot.dialog('/About/Vision', dialogs.about.vision).triggerAction({matches:/iics_vision/i});
bot.dialog('/About/Mission', dialogs.about.mission).triggerAction({matches:/iics_mission/i});
bot.dialog('/About/Administrators', dialogs.about.admin).triggerAction({matches:/iics_admin/i});
bot.dialog('/About/Chairpersons', dialogs.about.chair).triggerAction({matches:/iics_chair/i});
bot.dialog('/About/Staffs', dialogs.about.staff).triggerAction({matches:/iics_staff/i});
bot.dialog('/About/Courses', dialogs.about.courses).triggerAction({matches:/courses_offered/i});
bot.dialog('/About/Courses/CS', dialogs.about.CS).triggerAction({matches:/iics_CS/i});
bot.dialog('/About/Courses/IT', dialogs.about.IT).triggerAction({matches:/iics_IT/i});
bot.dialog('/About/Courses/IS', dialogs.about.IS).triggerAction({matches:/iics_IS/i});
bot.dialog('/FacultySched/NextClass', dialogs.faculty.nextClass);
bot.dialog('/FacultySched/Room', dialogs.faculty.room);
bot.dialog('/FacultySched/CurrentClass', dialogs.faculty.currentClass);
bot.dialog('/FacultySched/SubjectTime', dialogs.faculty.subjectTime);
bot.dialog('/Who', dialogs.who.I);
bot.dialog('/Who/You', dialogs.who.YOU);
bot.dialog('/CheatSheet', dialogs.cheat).triggerAction({matches:/cheat_sheet/i});

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