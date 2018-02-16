const builder = require('botbuilder');
exports.prompts = {
GET_STARTED: 'Hi {0}!, I\'m IICS bot! I\'m here to assist you as much as I can on student and faculty related matters. Click the menu button below to start or click the subscribe button for latest news and announcements!',
DEPARTMENT: 'Kindly enter your UST or Gbiz email for verification: ',
DEPARTMENT_SECOND: 'Please enter again your UST or Gbiz email for verification: ',
NO_DEPARTMENT: 'I don\'nt know which department you belong to 🤔 please tell me your deparment so you can view announcements ',//////////////
SUBSCRIBED: 'Welcome, {0}! You are now subscribed to receive announcements from the {1} 🙂',
NOW_DONE: 'Now that\'s done, how can I be of assistance?',
UNSUBSCRIBE: 'Are you sure you want to unsubscribe? Doing so will prevent you from receiving announcements',
UNSUBSCRIBE_CONFIRMED: 'You are now unsubscribed',
ENTER_INQUIRY: 'Please enter your inquiry:',
FACULTY_FIRST: `It seems like it's your first time accessing this feature, for security purposes, please enter your ICS myGbiz account.`,
FACULTY_SECOND: `Please enter your ICS myGbiz account.`,
INVALID_EMAIL: `Sorry there is something wrong with validating the email you entered. Kindly check if you mistyped anything. Do you want to enter again?`,
VERIFIED_EMAIL: 'Hello {0} from {1}!, you can now ask questions regarding faculty schedule 🙂',
VERIFIED_EMAIL_ANNOUNCEMENT: 'Hello {0}!, you can now view announcements from the {1} 🙂',
NO_DEPARTMENT_ANNOUNCEMENTS: 'No announcements yet from your department',
NO_GENERAL_ANNOUNCEMENTS: 'No announcements yet from the IICS office',
CHECK_DOCUMENT: 'Please enter the tracking code for your document',
DEPARTMENT_ANNOUNCEMENTS: `Date announced: {0}`,
GENERAL_ANNOUNCEMENTS: `Date announced: {0}`,
LIVE_CHAT_WAIT: 'Please wait as I connect you to an IICS office personnel',
NEW_DEPARTMENT: 'Here are the announcements from your department',
AFTER_RATING: 'Thank you for response!',
ABOUT_IICS: 'The University of Santo Tomas Institute of Information and Computing Sciences, or \"UST-IICS\", is the computing and information technology school of the University of Santo Tomas, the oldest and the largest Catholic university in Manila, Philippines.',
ABOUT_IICS_2: 'The Institute of Information and Computing Sciences was formally established in 2014, with its separation as an independent academic unit from the Faculty of Engineering. Its programs trace their histories to the College of Science (for Computer Science), College of Commerce and Business Administration (for Information Systems), and the Faculty of Engineering (for Information Technology).<br/><br/>Asst. Prof. Alex A. Santos was the inaugural Director, while Rev. Fr. Hermel O. Pama, O.P., PhD was the first Regent.',
VISION_IICS: 'The Institute of Information and Computing Sciences envisions itself as a premier and innovative institution in Information Technology Education and research in the Asia-Pacific Region.',
MISSION_IICS: 'The Institute of Information and Computing Sciences of the University of Santo Tomas, under the inspiration of its model, Saint Thomas Aquinas, and its patron, Saint Vincent Ferrer, declares its commitment to the pursuit of truth and the formation of technically competent ITE professionals endowed with a strong commitment to lifelong learning, social responsibility and a desire for leadership in the spirit of service in their respective fields of specialization.',
ADMIN_IICS: 'The Administration of the Institute of Information and Computing Sciences are as follows:<br/><br/>Asst. Prof. Jerralyn T. Padua<br/>Acting Director<br/><br/>Rev. Fr. Hermel O. Pama, O.P., PhD<br/>Regent<br/><br/>Asst. Prof. Mylene J. Domingo, MIT<br/>Institute Secretary',
CHAIR_IICS: 'The chairpersons of IICS are<br/><br/>Asst. Prof. Jose L. Seño, MS (Computer Science)<br/><br/>Asst. Prof. Maricel A. Balais, MIT (Information Systems)<br/><br/>Asst. Prof. Mike C. Victorio, MA (Information Technology)',
STAFF_IICS: 'The Support Staff of IICS are<br/><br/>KHO, Madonna<br/>GARCIA, Aristotle B.<br/>LAFE, Alfred James<br/>NACAR, Danilo I.',
COURSES_IICS: 'Here are the courses offered by IICS: ',
CS_IICS: 'Students under this program are highly trained for software and system development. The program’s main focus is to expose the students to different approaches and styles in developing programs whether they are procedural or the object oriented type of system approach.<br/><br/>Starting Academic Year 2018-2019 (August 2018), the BS Computer Science program will offer three professional elective tracks for students:<br/>1. Core Computer Science<br/>2. Game Development',
IT_IICS: 'Under Bachelor of Science in Information Technology, the students are trained to be well versed in the practical and technical know-how of installing/setting-up of computers and computer networks. Special skills taught include troubleshooting and repairing of hardware components.<br/><br/>The Department of Information Technology of the Institute of Information and Computing Sciences has identified three (3) professional elective tracks for BS Information Technology students. They are as follows:<br/>1. Network and Security<br/>2. Web and Mobile App Development<br/>3. Robotics',
IS_IICS: 'The Department of Information Systems of the Institute of Information and Computing Sciences has identified two (2) professional elective tracks for BS Information Systems students. They are as follows:<br/>1. Business Analytics<br/>2. System Management',
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
            { msg: 'About_IICS', title: 'About IICS' }
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

about: [
    {
        name: 'about_choice',
        image: 'https://res.cloudinary.com/do2kgbqib/image/upload/v1514441154/Get-Started_rplfxj.jpg',
        title: 'What is IICS?',
        // text: 'Learn more about IICS',
        button: [
            { msg: 'What_is_iics', title: 'What is IICS?' }
        ]
    },
    {
        name: 'vision_choice',
        image: 'https://res.cloudinary.com/do2kgbqib/image/upload/v1514441154/Get-Started_rplfxj.jpg',
        title: 'Vision',
        // text: 'Know the recent announcements',
        button: [
            { msg: 'iics_vision', title: 'Vision' }
        ]
    },
    {
        name: 'mission_choice',
        image: 'https://res.cloudinary.com/do2kgbqib/image/upload/v1514441154/Get-Started_rplfxj.jpg',
        title: 'Mission',
        // text: 'Learn more about IICS',
        button: [
            { msg: 'iics_mission', title: 'Mission' }
        ]
    },
    {
        name: 'administration_choice',
        image: 'https://res.cloudinary.com/do2kgbqib/image/upload/v1514441154/Get-Started_rplfxj.jpg',
        title: 'Administrators',
        // text: 'Know the recent announcements',
        button: [
            { msg: 'iics_admin', title: 'Administrators' }
        ]
    },
    {
        name: 'chairpersons_choice',
        image: 'https://res.cloudinary.com/do2kgbqib/image/upload/v1514441154/Get-Started_rplfxj.jpg',
        title: 'Chairpersons',
        // text: 'Learn more about IICS',
        button: [
            { msg: 'iics_chair', title: 'Chairpersons' }
        ]
    },
    {
        name: 'staff_choice',
        image: 'https://res.cloudinary.com/do2kgbqib/image/upload/v1514441154/Get-Started_rplfxj.jpg',
        title: 'Staffs',
        // text: 'Know the recent announcements',
        button: [
            { msg: 'iics_staff', title: 'Staffs' }
        ]
    },
    {
        name: 'courses_choice',
        image: 'https://res.cloudinary.com/do2kgbqib/image/upload/v1514441154/Get-Started_rplfxj.jpg',
        title: 'Courses Offered',
        // text: 'Know the recent announcements',
        button: [
            { msg: 'courses_offered', title: 'Courses Offered' }
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

back_menu: [
    {
        name: 'back_menu',
        title: 'OPTIONS',
        button: [            
            { msg: 'Back to Main Menu', title: 'Back to Main Menu' }
        ]
    }
],

courses_menu: [
    {
        name: 'cs_choice',
        title: 'Computer Science',
        text: 'Know more about CS',
        button: [            
            { msg: 'iics_CS', title: 'Computer Science' }
        ]
    },
    {
        name: 'it_choice',
        title: 'Information Technology',
        text: 'Know more about IT',
        button: [            
            { msg: 'iics_IT', title: 'Information Technology' }
        ]
    },
    {
        name: 'is_choice',
        title: 'Information Systems',
        text: 'Know more about CS',
        button: [            
            { msg: 'iics_IS', title: 'Information Systems' }
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
