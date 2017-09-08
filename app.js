const restify = require('restify');
const builder = require('botbuilder');
/**Dialogs*/
const dialogs = require('./src/dialogs');
const addsession = require('./src/helpers/addsession');

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
bot.use({
    botbuilder: (session, next) => {
        var startOver = /^started|get started|start over|get started|get_started/i.test(session.message.text);

        if (startOver) {
            session.userData = {};
        }
       
        addsession(session);
        console.log(server.userData);
        if (!session.userData.firstRun) {
            session.userData.firstRun = true;
            session.beginDialog('/GetStarted');
        } else { next(); }
    }
});

//=========================================================
// Bot's Dialogs
//=========================================================

bot.dialog('/', dialogs.default);
bot.dialog('/GetStarted', dialogs.getStarted)
bot.dialog('/Menu', dialogs.menu);
bot.dialog('/CreditCards', dialogs.creditCard.main);
bot.dialog('/CreditCards/Rewards', dialogs.creditCard.rewards);
bot.dialog('/CreditCards/CashBack', dialogs.creditCard.cashBack);
bot.dialog('/CreditCards/Premier', dialogs.creditCard.premier);
bot.dialog('/CreditCards/Shell', dialogs.creditCard.shell);
bot.dialog('/CreditCards/Mercury', dialogs.creditCard.mercury);
bot.dialog('/GetDetails', dialogs.getDetails.main);
bot.dialog('/GetDetails/Email', dialogs.getDetails.email);
bot.dialog('/GetDetails/Loans', dialogs.getDetails.loans);
bot.dialog('/Loans', dialogs.loans.main)
bot.dialog('/Loans/Info', dialogs.loans.loanInfo)

//=========================================================
// Server Setup
//=========================================================

const server = restify.createServer();

/**Endpoint for incoming messages*/
server.post('/api/messages', connector.listen());

/**Start listening on 3978 by default*/
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log('Restify listening to port: %s', server.url);
});
