const restify = require('restify');
const builder = require('botbuilder');
/**Dialogs*/
const dialogs = require('./src/dialogs');

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
bot.dialog('/GetStarted', dialogs.getStarted);
bot.dialog('/Menu', dialogs.menu);
bot.dialog('/CreditCards', dialogs.creditCard.main);
bot.dialog('/CreditCards/Requirements/CardOptions', dialogs.creditCard.main_1);
bot.dialog('/CreditCards/Rewards', dialogs.creditCard.rewards);
bot.dialog('/CardOptions/Rewards', dialogs.creditCard.rewards_1);
bot.dialog('/CreditCards/CashBack', dialogs.creditCard.cashBack);
bot.dialog('/CardOptions/CashBack', dialogs.creditCard.cashBack_1);
bot.dialog('/CreditCards/Premier', dialogs.creditCard.premier);
bot.dialog('/CardOptions/Premier', dialogs.creditCard.premier_1);
bot.dialog('/CreditCards/Shell', dialogs.creditCard.shell);
bot.dialog('/CardOptions/Shell', dialogs.creditCard.shell_1);
bot.dialog('/CreditCards/Mercury', dialogs.creditCard.mercury);
bot.dialog('/CardOptions/Mercury', dialogs.creditCard.mercury_1);
bot.dialog('/CreditCards/Requirements', dialogs.creditCard.requirements);
bot.dialog('/CreditCards/Requirements/InstantApproval', dialogs.creditCard.instant_approval);
bot.dialog('/InstantApproval', dialogs.creditCard.instant_approval_1);
bot.dialog('/Requirements', dialogs.creditCard.requirements_1);
bot.dialog('/GetDetails', dialogs.getDetails.main);
bot.dialog('/GetDetails/Email', dialogs.getDetails.email);
bot.dialog('/GetDetails/Loans', dialogs.getDetails.loans);
bot.dialog('/Loans', dialogs.loans.main);
bot.dialog('/Loans/Info', dialogs.loans.loanInfo);
bot.dialog('/Loans/Decline', dialogs.loans.loanDecline);
bot.dialog('/Loans/Accept', dialogs.loans.loanAccept);
bot.dialog('/UsageDeals', dialogs.usageDeals.main);
bot.dialog('/UsageDeals/Dining', dialogs.usageDeals.dining);
bot.dialog('/UsageDeals/Travel', dialogs.usageDeals.travel);
bot.dialog('/UsageDeals/Online', dialogs.usageDeals.online);
// bot.dialog('/UsageDeals/Installments', dialogs.usageDeals.main);
// bot.dialog('/UsageDeals/Bill', dialogs.usageDeals.main);
// bot.dialog('/UsageDeals/World', dialogs.usageDeals.main);


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
