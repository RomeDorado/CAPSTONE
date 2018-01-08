const builder = require('botbuilder');
exports.prompts = {
GET_STARTED: 'Hi {0}!, I\'m IICS bot! I\'m here to assist you as much as I can on student and faculty related matters. Click the menu button below to start or click the subscribe button for latest news and announcements!',
DEPARTMENT: 'Which department you are in?',
SUBSCRIBED: 'Great! You are now subscribed to receive announcements from the IICS office and your deparment',
NOW_DONE: 'Now that\'s done, how can I be of assistance?',
UNSUBSCRIBE: 'Are you sure you want to unsubscribe? Doing so will prevent you from receiving announcements',
UNSUBSCRIBE_CONFIRMED: 'You are now unsubscribed'
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

],
default_menu:[
    {
        name: 'default_choice',
        title: 'Sorry I did not get ',
        text:'You can contact the admin by:',
        button: [
            { msg: 'Send Ticket', title: 'Send Ticket' },
            { msg: 'Livechat', title: 'Livechat' }
        ]
    }
]
}


exports.choices = {
SUBSCRIBE: ['IT', 'IS', 'CS'],
UNSUBSCRIBE: ['Proceed', 'Back to Main Menu'],
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
