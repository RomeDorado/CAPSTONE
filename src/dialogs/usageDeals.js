const builder = require('botbuilder');
const consts = require('../helpers/consts');
const card = require('../helpers/cardBuilder');
const request = require('request');
const config = require('../../config');
var quickReplies = require('botbuilder-quickreplies');
const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
const bot = new builder.UniversalBot(connector);

bot.use(quickReplies.QuickRepliesMiddleware);
quickReplies.LocationPrompt.create(bot);
/**Parent Dialog - Credit Cards */
module.exports.main = [
    (session) => {
        var cardName = card.getName(consts.card.usage_deals);
        var msg = card(session, consts.card.usage_deals, cardName);

        session.send(consts.prompts.USAGEDEALS_PROMPT);
        builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals));
    },
    (session, results) => {
        var choices = card.choices(consts.card.usage_deals);

        switch (results.response.entity) {
            case choices[0]:
                session.replaceDialog('/UsageDeals/Dining');
            break;

            case consts.choices.USAGE_DEALS[1]:
                session.replaceDialog('/UsageDeals/Travel');
            break;

            case consts.choices.USAGE_DEALS[2]:
                session.replaceDialog('/UsageDeals/Online');
            break;

            // case consts.choices.USAGE_DEALS[3]:
            //     session.replaceDialog('/UsageDeals/Installments');
            // break;

            // case consts.choices.CREDIT_CARD[4]:
            //     session.replaceDialog('/UsageDeals/Bill');
            // break;

            // case consts.choices.CREDIT_CARD[6]:
            //     session.replaceDialog('/UsageDeals/World');
            break;
        }

    }
]

/**Child Dialog - Usage Deals */
/**Dining dialog */
module.exports.dining = [
    function (session){
    
    var prompt = new builder.IntentDialog()
    .onBegin(function (session, args) {
        var message = new builder.Message(session).text('Please share your location...');
        message = AddQuickReplies(session, message, [
            new QuickReplyLocation()
        ]);

        session.send(message);
    })
    .matches(/(give up|quit|skip)/i, function (session) {
        // Return 'false' to indicate they gave up
        session.endDialogWithResult({ response: false });
    })
    .onDefault(function (session) {
        if (session.message.sourceEvent.message && session.message.sourceEvent.message.attachments) {
            var attachment = session.message.sourceEvent.message.attachments[0];
            if (attachment.type == 'location') {
                session.endDialogWithResult({ response: { entity: {
                    title: attachment.title,
                    coordinates: attachment.payload.coordinates
                }}})
            }
                } else {
                session.send("Sorry, try again.");
            }
        });
    }
]

/**Travel dialog */
module.exports.travel = [
    (session) => {
        var cardName = card.getName(consts.card.usage_deals_travel)
        var msg = card(session, consts.card.usage_deals_travel, cardName);

        session.send(consts.prompts.TRAVEL_PROMPT);
        builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_travel));
    },
    (session, results) => {
        var choices = card.choices(consts.card.usage_deals_travel);
        
        switch (results.response.entity) {
            case choices[0]:
                var cardName = card.getName(consts.card.pal)
                var msg = card(session, consts.card.pal, cardName);

                session.send(consts.prompts.PAL_PROMPT);
                builder.Prompts.text(session, msg)
            break;

            case choices[1]:
                var cardName = card.getName(consts.card.nike)
                var msg = card(session, consts.card.nike, cardName);

                session.send(consts.prompts.NIKE_PROMPT);
                builder.Prompts.text(session, msg)
            break;

            case choices[2]:
                var cardName = card.getName(consts.card.cathay)
                var msg = card(session, consts.card.cathay, cardName);

                session.send(consts.prompts.CATHAY_PROMPT);
                builder.Prompts.text(session, msg)
            break;
        }
    }
]

/**Online dialog */
module.exports.online = [
    (session) => {
        var cardName = card.getName(consts.card.usage_deals_online)
        var msg = card(session, consts.card.usage_deals_online, cardName);

        session.send(consts.prompts.TRAVEL_PROMPT);
        builder.Prompts.choice(session, msg, card.choices(consts.card.usage_deals_online));
    },
    (session, results) => {
        var choices = card.choices(consts.card.usage_deals_online);
        
        switch (results.response.entity) {
            case choices[0]:
                var cardName = card.getName(consts.card.love2click)
                var msg = card(session, consts.card.love2click, cardName);

                session.send(consts.prompts.LOVE2CLICK_PROMPT);
                builder.Prompts.text(session, msg)
            break;

            case choices[1]:
                var cardName = card.getName(consts.card.powermac)
                var msg = card(session, consts.card.powermac, cardName);

                session.send(consts.prompts.POWERMAC_PROMPT);
                builder.Prompts.text(session, msg)
            break;

            case choices[2]:
                var cardName = card.getName(consts.card.rustan)
                var msg = card(session, consts.card.rustan, cardName);

                session.send(consts.prompts.RUSTANS_PROMPT);
                builder.Prompts.text(session, msg)
            break;
        }
    }
]

/**Shell dialog */
module.exports.shell = [
    (session) => {
        builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_SHELL, consts.styles.button);
    },
    (session, results) => {
        switch (results.response.entity) {
            case consts.choices.LEARN_SHELL[0]:
                var cardName = ['shell_benefit_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.SHELL_BENEFITS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;

            case consts.choices.LEARN_SHELL[1]:
                var cardName = ['shell_eligibility_requirements_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.ELIGIBILITY);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;

            case consts.choices.LEARN_SHELL[2]:
                var cardName = ['shell_eligibility_requirements_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.REQUIREMENTS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;
        }
    },
    (session, results) => {
        if (results.response.entity == consts.choices.CREDIT_CARD[3]) {
            session.replaceDialog('/CreditCards/Shell');
        } else { session.replaceDialog('/GetDetails'); }
    }
]

/**Mercury Drug dialog */
module.exports.mercury = [
    (session) => {
        builder.Prompts.choice(session, consts.prompts.LEARN_PROMPT, consts.choices.LEARN_MD, consts.styles.button);
    },
    (session, results) => {
        switch (results.response.entity) {
            case consts.choices.LEARN_MD[0]:
                var cardName = ['mercury_benefit_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.MD_BENEFITS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;

            case consts.choices.LEARN_MD[1]:
                var cardName = ['mercury_eligibility_requirements_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.ELIGIBILITY);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;

            case consts.choices.LEARN_MD[2]:
                var cardName = ['mercury_eligibility_requirements_card']
                var msg = card(session, consts.menus.card, cardName);

                session.send(consts.prompts.REQUIREMENTS);
                builder.Prompts.choice(session, msg, consts.choices.CREDIT_CARD, consts.styles.button);
                break;
        }
    },
    (session, results) => {
        if (results.response.entity == consts.choices.CREDIT_CARD[4]) {
            session.replaceDialog('/CreditCards/Mercury');
        } else { session.replaceDialog('/GetDetails'); }
    }
]

function sendQuickReply(id) {
    var replies = [];
    let reply =
    {
        "content_type":"location",        
    }    
    replies.push(reply);
    let makati = {
        "content_type": "text",
        "title": "Makati City",
        "payload": "Makati City",
    }
    replies.push(makati);
    let quezon = {
        "content_type": "text",
        "title": "Quezon City",
        "payload": "Quezon City",
    }
    replies.push(quezon);
    
	var messageData = {
		recipient: {
			id: id,
		},
		message: {
			text: consts.prompts.LOVE_TO_DINE,			
			quick_replies: replies
		}
	};

	callSendAPI(messageData);
}
function callSendAPI(messageData) {
	request({
		uri: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {
			access_token: 'EAACADw8emg8BAG9kfpPLGLp3gPfwXcuCMqGiXG8tiIXTyzZAGtsu4BsZCoBFvOFmWzy6JqNA9qYklbHV4OT7ZB8zUEw938HmGtA5NbVRxZAPiucmQMij0SoGfMLAx6JM70RAGfV3ud1Xw6e2f3jeV4ZA4N1a5Y5ZAsDfcrVpYORHK0xsiSZAsjZA'
		},
		method: 'POST',
		json: messageData

	}, function (error,response, body) {
		if (!error && response.statusCode == 200) {
            console.log(JSON.stringify(body) + 'this is the request');
			var recipientId = body.recipient_id;
			var messageId = body.message_id;

			if (messageId) {
                console.log(response + "this is the response");
				console.log("Successfully sent message with id %s to recipient %s",
					messageId, recipientId);
			} else {
				console.log("Successfully called Send API for recipient %s",
					recipientId);
			}
		} else {
			console.error("Failed calling Send API", response.statusCode, response.statusMessage, body.error);
		}
	});
}

function AddQuickReplies(session, message, quickReplys) {
    if (session.message.source != 'facebook') {
        message.sourceEvent({
            facebook: {
                quick_replies: quickReplys
            }
        })
    }

    return message;
}

function QuickReplyLocation() {
    return {
        content_type:"location",
    }
}