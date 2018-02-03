const builder = require('botbuilder');
exports.prompts = {
GET_STARTED: 'Hi {0}!, I\'m IICS bot! I\'m here to assist you as much as I can on student and faculty related matters. Click the menu button below to start or click the subscribe button for latest news and announcements!',
DEPARTMENT: 'Which department you are in?',
NO_DEPARTMENT: 'I still don\'nt know which department you belong to 🤔 please tell me your deparment so that I can pull up ',
SUBSCRIBED: 'Great! You are now subscribed to receive announcements from the IICS office and your deparment',
NOW_DONE: 'Now that\'s done, how can I be of assistance?',
UNSUBSCRIBE: 'Are you sure you want to unsubscribe? Doing so will prevent you from receiving announcements',
UNSUBSCRIBE_CONFIRMED: 'You are now unsubscribed',
ENTER_INQUIRY: 'Please enter your inquiry:',
FACULTY_FIRST: `It seems like it's your first time accessing this feature, for security purposes, please enter your ICS myGbiz account.`,
FACULTY_SECOND: `Please enter your ICS myGbiz account.`,
INVALID_EMAIL: `Sorry there is something wrong with validating your myGbiz account. The account you entered doesn't exist. Do you want to enter again?`,
VERIFIED_EMAIL: 'Email verified! You can now ask questions regarding faculty schedule',
NO_DEPARTMENT_ANNOUNCEMENTS: 'No announcements yet from your department',
NO_GENERAL_ANNOUNCEMENTS: 'No announcements yet from the IICS office',
CHECK_DOCUMENT: 'Please enter the tracking code for your document',
DEPARTMENT_ANNOUNCEMENTS: `Date announced: {0}`,
GENERAL_ANNOUNCEMENTS: `Date announced: {0}`,
LIVE_CHAT_WAIT: 'Please wait as I connect you to an IICS office personnel',
NEW_DEPARTMENT: 'Here are the announcements from your department'
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
            { msg: 'Announcements', title: 'Announcements' }
        ]
    }

],
default_menu:[
    {
        name: 'default_choice',
        title: 'Contact us',
        // text:'You can contact the admin by:',
        button: [
            { msg: 'Send Ticket', title: 'Send a ticket' },
            { msg: 'Livechat', title: 'Chat with us now' }
        ]
    }
],
enter_email: [
    {
        name: 'enter_email',
        title: 'OPTIONS',
        button: [
            { msg: 'Enter again', title: 'Enter again' },
            { msg: 'Back to Main Menu', title: 'Back to Main Menu' }
        ]
    }
],
announcements_menu: [
    {
        name: 'general_announcements',
        title: 'General Annoncements',        
        image: 'https://res.cloudinary.com/do2kgbqib/image/upload/v1514441154/Get-Started_rplfxj.jpg',
        button: [
            { msg: 'General-announcement', title: 'General' }            
        ]
    },
    {
        name: 'dep_announcements',
        title: 'Department',        
        image: 'https://res.cloudinary.com/do2kgbqib/image/upload/v1514441154/Get-Started_rplfxj.jpg',
        button: [
            { msg: 'Department-announcement', title: 'Deparment' }            
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
