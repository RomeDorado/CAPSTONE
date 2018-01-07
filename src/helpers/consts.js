const builder = require('botbuilder');
exports.prompts = {
GET_STARTED: 'Hi {0}!, I\'m IICS bot! I\'m here to assist you as much as I can on student and faculty related matters. Click the menu button below to start or click the subscribe button for latest news and announcements!',
DEPARTMENT: 'Which department you are in?',
SUBSCRIBED: 'Great! You are now subscribed to receive announcements from the IICS office and your deparment',
NOW_DONE: 'Now that\'s done, how can I be of assistance?',
LEARN_PROMPT: 'What would you like to know?',
REWARD_BENEFITS: '*Earn never-expiring Rewards Points (P30 = 1 Point)\n\n *Get 3x Rewards Points when you shop, dine or book Cebu Pacific tickets\n\n *Use your Points to pay for your purchases at over 1,000 shops, cinemas and restaurants nationwide',
CASH_BENEFITS: '*Get up to 6% rebate on your supermarket expenses\n\n *Get up to 2% rebate on your Meralcobills\n\n *Get up to 0.20% rebate on all other purchases',
PREMIER_BENEFITS: '*Never-expiring miles for as low as P30\n\n *Redeem for flights and hotel stays instantly through Citi ThankYou Rewards\n\n *Complimentary international airport lounge access\n\n *24/7 Visa Signature Concierge service',
SHELL_BENEFITS: '*Get up to 5% rebate on your Shell fuel expenses\n\n *Get up to 5% rebate when you use your Shell Citi® Card to purchase South Luzon Expressway and North Luzon Expressway toll load\n\n *Get up to 5% rebate on ALL auto repairs, accessories and services nationwide.',
MD_BENEFITS: '*Get up to 10% rebate on your Mercury Drug purchases and hospital bills.rebate on ALL auto repairs, accessories and services nationwide.',
LOAN_BENEFITS: '*Approval in as fast as 24 hours\n\n *Flexible terms of 1 to 5 years\n\n *No collateral or guarantor needed\n\n *High loan amount of up to P2M (subject to approval)',
}

exports.menus = {
first_menu: [
    {
        name: 'menu_choice',
        image: 'https://res.cloudinary.com/do2kgbqib/image/upload/v1514441154/Get-Started_rplfxj.jpg',
        title: 'IICS Chatbot',
        button: [
            { msg: 'Main menu', title: 'Main menu' },
            { msg: 'Subscribe', title: 'Subscribe' }            
        ]
    }
],
second_menu: [
    {
        name: 'menu_choice',
        image: 'https://res.cloudinary.com/do2kgbqib/image/upload/v1514441154/Get-Started_rplfxj.jpg',
        title: 'IICS Chatbot',
        button: [
            { msg: 'Main menu', title: 'Main menu' },
            { msg: 'Unsubscribe', title: 'Unsubscribe' }            
        ]
    }
],

menu: [
    {
        name: 'menu_about_choice',
        image: 'https://res.cloudinary.com/do2kgbqib/image/upload/v1514441154/Get-Started_rplfxj.jpg',
        title: 'About IICS',
        text: 'Learn more about IICS',
        button: [
            { msg: 'About IICS', title: 'About IICS' }            
        ]
    },
    {
        name: 'menu_annoucement_choice',
        image: 'https://res.cloudinary.com/do2kgbqib/image/upload/v1514441154/Get-Started_rplfxj.jpg',
        title: 'Announcements',
        text: 'Know the recent announcements',
        button: [
            { msg: 'About IICS', title: 'About IICS' }            
        ]
    }
    
]
}


exports.choices = {
SUBSCRIBE: ['IT', 'IS', 'CS'],    
GET_STARTED: ['Let\'s get started', 'Quit']

}

exports.styles = {
button: { listStyle: builder.ListStyle.button },
inline: { listStyle: builder.ListStyle.inline },
list: { listStyle: builder.ListStyle.list },
auto: { listStyle: builder.ListStyle.auto },
none: { listStyle: builder.ListStyle.none }
}

exports.messageLayout = {
carousel: builder.AttachmentLayout.carousel,
list: builder.AttachmentLayout.list
}