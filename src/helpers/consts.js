const builder = require('botbuilder');
exports.prompts = {
    GET_STARTED: 'Hi {0}! We offer a wide range on financial services like Credit Cards, Deposits, Loans, Investment options & Digital Banking. Join the Citibank Philippines family today!',
    MENU: 'What do you want to do?',
    LEARN_PROMPT: 'What would you like to know?',
    REWARD_BENEFITS: '*Earn never-expiring Rewards Points (P30 = 1 Point)\n\n *Get 3x Rewards Points when you shop, dine or book Cebu Pacific tickets\n\n *Use your Points to pay for your purchases at over 1,000 shops, cinemas and restaurants nationwide',
    CASH_BENEFITS: '*Get up to 6% rebate on your supermarket expenses\n\n *Get up to 2% rebate on your Meralcobills\n\n *Get up to 0.20% rebate on all other purchases',
    PREMIER_BENEFITS: '*Never-expiring miles for as low as P30\n\n *Redeem for flights and hotel stays instantly through Citi ThankYou Rewards\n\n *Complimentary international airport lounge access\n\n *24/7 Visa Signature Concierge service',
    SHELL_BENEFITS: '*Get up to 5% rebate on your Shell fuel expenses\n\n *Get up to 5% rebate when you use your Shell Citi® Card to purchase South Luzon Expressway and North Luzon Expressway toll load\n\n *Get up to 5% rebate on ALL auto repairs, accessories and services nationwide.',
    MD_BENEFITS: '*Get up to 10% rebate on your Mercury Drug purchases and hospital bills.rebate on ALL auto repairs, accessories and services nationwide.',
    LOAN_BENEFITS: '*Approval in as fast as 24 hours\n\n *Flexible terms of 1 to 5 years\n\n *No collateral or guarantor needed\n\n *High loan amount of up to P2M (subject to approval)',
    ELIGIBILITY: 'To be eligible, you must be at least 21 years of age or older and a resident of the Philippines with a valid Philippine billing address.\n\n You also must have an annual income of P180,000 or higher, a postpaid landline or a postpaid mobile phone, and a Tax Identification Number (TIN) and SSS/GSIS No. to apply for a Citi® Card :)',
    LOAN_ELIGIBITY: 'To be eligible for the Citi Personal loan, you must be at least 21 years of age or older and a resident of the Philippines with a valid Philippine billing address.\n\n You also must have an annual income of P250,000 or higher and a principal credit card (at least 1 year if from other banks, 6 months if Citi Card)',
    LOAN_REQUIREMENTS: 'Please submit the following:\n - One (1) valid government-issued ID with photo and signature\n- For employed: Latest ITR or BIR 2316 or pay slip for the past 3 months\n - For self-employed: Latest ITR and latest Audited Financial Statements (AFS)\n - Duly accomplished application form',
    REQUIREMENTS: 'Information required when\n applying online:\n - Personal information\n - Employment/Financial information\n - Other credit card information\n\n Documents required:\n - Photocopy of any two (2) valid IDs with photo and signature\n - SSS Photocard\n - TIN ID Card\n - Passport\n - Driver\'s License\n - Company ID\n - Proof of income',
    GET_NAME: 'Please enter your full name',
    GET_NUMBER: 'What is your mobile number?',
    GET_EMAIL: 'What is your email address?',
    GET_TIME: 'Please let us know the best time for us to call you :)',
    LOVE_TO_DINE: 'Let’s find branches near your preferred area',
    GET_INCOME: 'Lastly, may we know your annual income range?',
    GET_DETAILS_DONE: 'Thank you, {0}! A customer service representative will be contacting you soon :)',
    GET_LOAN_CONFIRMATION: 'Do you have a credit card that you\'ve owned for at least 12 months?',
    GET_LOAN_EMAIL: 'What is your email address?',
    GET_LOAN_INCOME: 'What is your annual income range?',
    GET_DETAILS_LOAN_DONE: 'Thank you, {0}! A customer service representative will be contacting you soon :)',
    GET_LOAN_CONFIRMATION_NO: 'Thank you for your interest in a Citi Personal Loan.\n\n For us to proceed with your application, we require that you own a credit card for at least 12 months. If this changes anytime in the future, feel free to re-apply.',
    INVALID_EMAIL: 'The email address you enter is invalid please re-enter it again.',
    LOAN_PROMPT: 'Thank you for your interest in a Citi Personal Loan! 🙂',
    LOAN_BENEFITS: `Benefits at a glance: 
    - Approval in as fast as 24 hours 
    - Flexible terms of 1 to 5 years 
    - No collateral or guarantor needed 
    - High loan amount of up to P2M (subject to approval)`,
    BEFORE_PROCEED: 'Before we proceed, we’d like to ask if you meet the following:',
    BEFORE_PROCEED_REQ: `- 25 to 60 years old 
    - Filipino resident OR local resident foreigner with valid Philippine billing address 
    - have annual income of at least P250,000 
    - have a principal credit card of at least 12 months from other banks (6 months if Citi credit card)`,
    USAGEDEALS_PROMPT: 'Which category would you want to explore?',
    DEC_TEXT: `{0}, thank you for your interest in a Citi Personal Loan. Take note that we can only proceed with an application if you currently have an active credit card for at least 12 months.`,
    ACC_TEXT: `Great! 🙂 Kindly prepare the following for a quicker application experience: - Valid governmentissued IDs (e.g. passport, driver’s license) - For employed: Latest ITR, BIR 2316, or payslip for the last 3 months - For self-employed: Latest ITR and latest Audited Financial Statements (AFS)`,
    DINING_PROMPT: 'Let’s find branches near your preferred area! 🙂',
    TRAVEL_PROMPT: 'Here are our travel deals!',
    WIN_WHAT_YOU_DINE: 'Use your Citi credit card at any restaurant and get a chance to win back up to P5,000 of your bill. \n\nPromo is from June 16 to 30, 2017.',
    BONCHON_PROMPT: 'Get a free Bibimbowl of your preferred meat and flavor for a minimum spend of P1,500 at BonChon. \n\nValid from May 8 to October 31, 2017. \n\nPromo is offered at BonChon stores nationwide.',
    PAL_PROMPT: 'Apply online and use your new Citi credit card for at least P20,000 within 60 days from receipt. \n\nValid until September 30, 2017. \n\nTerms and conditions apply.',
    NIKE_PROMPT: 'Apply online and use your new Citi credit card for at least P20,000 within 60 days from receipt. \n\nValid until September 30, 2017. \n\nTerms and conditions apply.',
    CATHAY_PROMPT: 'Enjoy discounted Business Class and Premium Economy tickets to Europe from $1270, US from $1365, Australia from $1385 & more. \n\nExclusive for Citi Prestige, Citi PremierMiles and Citi Platinum Visa cardholders. \n\nCiti Prestige cardholders can book first from July 3 to 9, 2017. \n\nCiti PremierMiles and Citi Platinum Visa cardholders can book from July 5-9, 2017. \n\nTravel period: July 3, 2017 to May 31, 2018. \n\nValid for 2 passengers traveling both ways. \n\nFares quoted are per person. \n\nBook at http://bit.ly/CXCitiPrivate.',
    PERI: 'Enjoy 25% off at Peri-Peri with a minimum spend of P2,000. \n\nAvailable on Mondays to Fridays, from May 1 to \n\nOctober 31, 2017 in participating branches.',
    LOVE2CLICK_PROMPT: 'Enjoy exclusive online deals and discounts from over 30 brands with your Citi credit card. \n\nPromo period from July 1 to September 30, 2017.',
    POWERMAC_PROMPT: 'For a minimum single-receipt transaction of P50,000 at 0% Citi PayLite up to 24 months. \n\nValid until Aug. 31, 2017.',
    RUSTANS_PROMPT: 'Get a Rustan\'s GC worth P2,500 when you spend a minimum single-receipt transaction of P50,000 at 0% Citi PayLite up to 12 months. \n\nValid until Jan 31, 2018.',
    CITI_REWARDS: `This is exciting, {0}! Did you know that your Citi Rewards card is the best-in-class rewards or points card?
    
    - Get never-expiring points at the lowest spend (P30 = 1 point)
    - Get 3x points when you shop, dine, or book Cebu Pacific tickets
    - Purchase from over 1,000 shops, cinemas, and restaurants nationwide using your points`,
    CITI_CASHBACK: `{0}, get more from your Citi Cash Back card – the best-in-class rebates card:
    
    - Get the highest rebate out there, up to 6% on your supermarket expenses
    - For your Meralco bills, get up to 2% rebate
    - For all other purchases, get up to 0.20%`,
    CITI_PREMIER: `Great choice, {0}! Did you know that your Citi PremierMiles card is the best-in-class travel card in the market?
    
    - Get never-expiring miles at the lowest spend (P30 = 1 mile)
    - Enjoy free flights and hotel stays, with 24/7 Visa Signature Concierge service
    - Access international airport lounges`,
    CITI_SHELL: `{0}, your Shell Citi card can make things better for you. Get up to 5% rebate on the ff:
    
    - Shell fuel expenses
    - SLEX/NLEX toll load
    - ALL auto repairs, accessories, and services nationwide`,
    CITI_MERCURY: `{0}, your Mercury Drug Citi card can give you up to 10% rebate on your Mercury Drug purchases and hospital bills.`,
    REQUIREMENTS_NOT_EMPLOYED: `Got it, {0}! Kindly prepare for the following, then we can proceed:
    
    - Other credit card (must be > 6 months)
    - Valid government-issued IDs (e.g. passport, driver’s license)
    - Proof of income (e.g. latest ITR, latest payslip)`,
    REQUIREMENTS_EMPLOYED: `Great! Kindly be ready with the following for a quicker application experience:
    
    - Other credit card (if any)
    - Valid government-issued IDs (e.g. passport, driver’s license)
    - Proof of income (e.g. latest ITR, latest payslip)`,
    REQUIREMENTS_SELF_EMPLOYED: `Just one last reminder, {0} – kindly prepare for the following:
    
    - Other credit card (if any)
    - Valid government-issued IDs (e.g. passport, driver’s license)
    - Proof of income: latest Audited Financial Statement (AFS); latest ITR duly stamped as received by BIR
    
    Note: If your assets are at least P15 million, please prepare both proofs of income.`,
    INSTANT_APPROVAL: `Exciting! May we know if you are:
    
    - at least 21 years old
    - Filipino resident with valid Philippine billing address
    - with annual income of at least P180,000
    - with valid landline or mobile phone number
    - with valid TIN and SSS/GSIS number`,
    INSTANT_APPROVAL_YES: `That’s good news, {0}! You can now proceed to your application.`,
    INSTANT_APPROVAL_NO: `{0}, thank you for your interest in a Citi Credit Card. However, take note that the conditions above must be met for us to proceed with an application.`
}

exports.menus = {
    card: [
        {
            name: 'loans_card',
            title: '',
            image: '',
            button: [
                { msg: 'Apply now', title: 'Apply now' },
                { msg: 'Back to Main Menu', title: 'Back to Main Menu' },
                // { url: 'https://www.citibank.com.ph/global_docs/1click/personal-loans-apply-now/index.htm?s=D2CBBAU1&icid=PHEPI2SENLHCAAN', title: 'Apply Now' }
            ]
        },
        {
            name: 'loans_benefit_card',
            title: '',
            image: '',
            button: [
                { msg: 'Learn Loans', title: 'Learn More' },
                { msg: 'Call Me', title: 'Call Me' },
                { url: 'https://www.citibank.com.ph/global_docs/1click/personal-loans-apply-now/index.htm?s=D2CBBAU1&icid=PHEPI2SENLHCAAN', title: 'Apply Now' },
            ]
        },
        {
            name: 'loans_eligibility_card',
            title: '',
            image: '',
            button: [
                { msg: 'Learn Loans', title: 'Learn More' },
                { msg: 'Call Me', title: 'Call Me' },
                { url: 'https://www.citibank.com.ph/global_docs/1click/personal-loans-apply-now/index.htm?s=D2CBBAU1&icid=PHEPI2SENLHCAAN', title: 'Apply Now' },
            ]
        },
        {
            name: 'loans_requirements_card',
            title: '',
            image: '',
            button: [
                { url: 'https://www.citibank.com.ph/global_docs/pdf/Citi-Personal-Loan-App-Form.pdf', title: 'Application Requirements' },
                { msg: 'Back', title: 'Back' }
            ]
        },

    ],
    menu: [
        {
            name: 'menu_choice',
            title: 'What can I do for you today?',
            button: [
                { msg: 'Credit Cards', title: 'Credit Cards' },
                { msg: 'Loans', title: 'Loans' },
                { msg: 'Deals & Promos', title: 'Deals & Promos' }
            ]
        }
    ],
    credit_card: [
        {
            name: 'credit_card_menu',
            title: 'What do you want to know?',
            button:[
                { msg: 'Requirements', title: 'Requirements' },
                { msg: 'Instant Approval', title: 'Instant Approval' },
                { msg: 'Back to Credit Cards', title: 'Back to Credit Cards' }
            ]
        }
    ],
    credit_card_1: [
        {
            name: 'credit_card_menu',
            title: 'What do you want to know?',
            button:[
                { msg: 'Instant Approval', title: 'Instant Approval' },
                { msg: 'Back to Credit Cards', title: 'Back to Credit Cards' }
            ]
        }
    ],
    requirements: [
        {
            name: 'requirements_menu',
            title: 'Are you employed?',
            button:[
                { msg: 'Employed', title: 'Employed' },
                { msg: 'Self-Employed', title: 'Self-Employed' },
                { msg: 'Not Employed', title: 'Not Employed' }
            ]
        }
    ],
    requirements_menu_1: [
        {
            name: 'requirements_menu_1',
            title: 'Options',
            button:[
                { msg: 'Instant Approval', title: 'Instant Approval' },
                { msg: 'Main Menu', title: 'Main Menu' },
            ]
        }
    ],
    requirements_menu_2: [
        {
            name: 'requirements_menu_2',
            title: 'Options',
            button:[
                { msg: 'Credit Card Options', title: 'Credit Card Options' },
                { msg: 'Main Menu', title: 'Main Menu' },
            ]
        }
    ],
    instant_approval: [
        {
            name: 'instant_approval_1',
            title: 'Options',
            button:[
                { msg: 'Yes, I am', title: 'Yes, I am' },
                { msg: `No, I'm not`, title: `No, I'm not` },
            ]
        }
    ],
    instant_approval_yes: [
        {
            name: 'instant_approval_yes',
            title: 'Options',
            button:[
                { url: 'https://www.google.com', title: 'Apply Now!' },
                { msg: `Back to Credit Cards`, title: `Back to Credit Cards` },
            ]
        }
    ],
    instant_approval_yes_1: [
        {
            name: 'instant_approval_yes_1',
            title: 'Options',
            button:[
                { msg: 'Requirements', title: 'Requirements' },
                { msg: `Back to Credit Cards`, title: `Back to Credit Cards` },
            ]
        }
    ],
    instant_approval_no: [
        {
            name: 'instant_approval_no',
            title: 'Options',
            button:[
                { msg: 'Back to Main Menu', title: 'Main Menu' }
            ]
        }
    ]
}

exports.card = {
    loans_card: [
        {
            name: 'loans_card',
            title: '',
            image: '',
            button: [
                { msg: 'Apply now', title: 'Apply now' },
                { msg: 'Back to Main Menu', title: 'Back to Main Menu' },
                // { url: 'https://www.citibank.com.ph/global_docs/1click/personal-loans-apply-now/index.htm?s=D2CBBAU1&icid=PHEPI2SENLHCAAN', title: 'Apply Now' }
            ]
        }
    ],
    loans_req: [
        {
            name: 'loans_req',
            title: '',
            image: '',
            button: [
                { msg: 'Yes, I do.', title: 'Yes, I do.' },
                { msg: 'No, I don\'t.', title: 'No, I don\'t.' },
                // { url: 'https://www.citibank.com.ph/global_docs/1click/personal-loans-apply-now/index.htm?s=D2CBBAU1&icid=PHEPI2SENLHCAAN', title: 'Apply Now' }
            ]
        }
    ],
    loans_acc: [
        {
            name: 'loans_acc',
            title: '',
            image: '',
            button: [
                { url: 'http://cb-apply-page.herokuapp.com/index.html', title: 'Proceed to Apply' },
                { msg: 'Main Menu', title: 'Main Menu' },                
            ]
        }
    ],
    loans_dec: [
        {
            name: 'loans_dec',
            title: '',
            image: '',
            button: [
                { msg: 'Back to Main Menu', title: 'Back to Main Menu' }                                
            ]
        }
    ],
    loans_benefit_card: [
        {
            name: 'loans_benefit_card',
            title: '',
            image: '',
            button: [
                { msg: 'Learn Loans', title: 'Learn More' },
                { msg: 'Call Me', title: 'Call Me' },
                { url: 'https://www.citibank.com.ph/global_docs/1click/personal-loans-apply-now/index.htm?s=D2CBBAU1&icid=PHEPI2SENLHCAAN', title: 'Apply Now' },
            ]
        }
    ],
    loans_eligibility_card: [
        {
            name: 'loans_eligibility_card',
            title: '',
            image: '',
            button: [
                { msg: 'Learn Loans', title: 'Learn More' },
                { msg: 'Call Me', title: 'Call Me' },
                { url: 'https://www.citibank.com.ph/global_docs/1click/personal-loans-apply-now/index.htm?s=D2CBBAU1&icid=PHEPI2SENLHCAAN', title: 'Apply Now' },
            ]
        }
    ],
    loans_requirements_card: [
        {
            name: 'loans_requirements_card',
            title: '',
            image: '',
            button: [
                { url: 'https://www.citibank.com.ph/global_docs/pdf/Citi-Personal-Loan-App-Form.pdf', title: 'Application Requirements' },
                { msg: 'Back', title: 'Back' }
            ]
        }
    ],
    mercury_benefit_card: [
        {
            name: 'mercury_benefit_card',
            title: '',
            image: '',
            button: [
                { msg: 'Learn Mercury', title: 'Learn More' },
                { msg: 'Call Me', title: 'Call Me' },
                { url: 'https://www.citibank.com.ph/accope/index.html#accope?pcode=VC620&scode=W0S11HP1&icid=PHCCA5HENCPCRCANC', title: 'Apply Now' },
            ]
        }
    ],
    mercury_eligibility_requirements_card: [
        {
            name: 'mercury_eligibility_requirements_card',
            title: '',
            image: '',
            button: [
                { msg: 'Learn Mercury', title: 'Learn More' },
                { msg: 'Call Me', title: 'Call Me' },
                { url: 'https://www.citibank.com.ph/accope/index.html#accope?pcode=VC620&scode=W0S11HP1&icid=PHCCA5HENCPCRCANC', title: 'Apply Now' },
            ]
        }
    ],
    shell_benefit_card: [
        {
            name: 'shell_benefit_card',
            title: '',
            image: '',
            button: [
                { msg: 'Learn Shell', title: 'Learn More' },
                { msg: 'Call Me', title: 'Call Me' },
                { url: 'https://www.citibank.com.ph/accope/index.html#accope?pcode=VC690&scode=W0S11HP1&icid=PHCCATEENCPCRCANC', title: 'Apply Now' },
            ]
        }
    ],
    shell_eligibility_requirements_card: [
        {
            name: 'shell_eligibility_requirements_card',
            title: '',
            image: '',
            button: [
                { msg: 'Learn Shell', title: 'Learn More' },
                { msg: 'Call Me', title: 'Call Me' },
                { url: 'https://www.citibank.com.ph/accope/index.html#accope?pcode=VC690&scode=W0S11HP1&icid=PHCCATEENCPCRCANC', title: 'Apply Now' },
            ]
        }
    ],
    premier_benefit_card: [
        {
            name: 'premier_benefit_card',
            title: '',
            image: '',
            button: [
                { msg: 'Learn Premier', title: 'Learn More' },
                { msg: 'Call Me', title: 'Call Me' },
                { url: 'https://www.citibank.com.ph/accope/index.html#accope?pcode=VC720&scode=W0S11HP1&icid=PHCCANNENCPCRCANC', title: 'Apply Now' },
            ]
        }
    ],
    premier_eligibility_requirements_card: [
        {
            name: 'premier_eligibility_requirements_card',
            title: '',
            image: '',
            button: [
                { msg: 'Learn Premier', title: 'Learn More' },
                { msg: 'Call Me', title: 'Call Me' },
                { url: 'https://www.citibank.com.ph/accope/index.html#accope?pcode=VC720&scode=W0S11HP1&icid=PHCCANNENCPCRCANC', title: 'Apply Now' },
            ]
        }
    ],
    cash_benefit_card: [
        {
            name: 'cash_benefit_card',
            title: '',
            image: '',
            button: [
                { msg: 'Learn Cash', title: 'Learn More' },
                { msg: 'Call Me', title: 'Call Me' },
                { url: 'https://www.citibank.com.ph/accope/index.html#accope?pcode=VC600&scode=W0S11HP1&icid=PHCCAX2ENCPCRCANC', title: 'Apply Now' },
            ]
        }
    ],
    cash_eligibility_requirements_card: [
        {
            name: 'cash_eligibility_requirements_card',
            title: '',
            image: '',
            button: [
                { msg: 'Learn Cash', title: 'Learn More' },
                { msg: 'Call Me', title: 'Call Me' },
                { url: 'https://www.citibank.com.ph/accope/index.html#accope?pcode=VC600&scode=W0S11HP1&icid=PHCCAX2ENCPCRCANC', title: 'Apply Now' },
            ]
        }
    ],
    rewards_benefit_card: [
        {
            name: 'rewards_benefit_card',
            title: '',
            image: '',
            button: [
                { url: 'https://www.citibank.com.ph/accope/index.html#accope?pcode=VC680&scode=W0S11HP1&icid=PHCCA3VENCPCRCANC', title: 'Apply Now' },
                { msg: 'Back', title: 'Back' },
            ]
        }
    ],
    rewards_eligibility_requirements_card: [
        {
            name: 'rewards_eligibility_requirements_card',
            title: '',
            image: '',
            button: [
                { msg: 'Learn Rewards', title: 'Learn More' },
                { msg: 'Call Me', title: 'Call Me' },
                { url: 'https://www.citibank.com.ph/accope/index.html#accope?pcode=VC680&scode=W0S11HP1&icid=PHCCA3VENCPCRCANC', title: 'Apply Now' },
            ]
        }
    ],
    credit_card: [
        {
            name: 'citireward_card',
            title: 'Citi Rewards® Card',
            image: 'https://ringgitplus.com/img/card-400/57eddcb0655a14fd555f44f0/citi-rewards-world-mastercard.jpg',
            button: [
                { msg: 'Card Benefits - Reward', title: 'Card Benefits' },
                { msg: 'Requirements', title: 'Requirements' },
                { msg: 'Instant Approval', title: 'Instant Approval' }
            ]
        },
        {
            name: 'citicashback_card',
            title: 'Citi Cash Back® Card',
            image: 'https://cgblogassets.s3-ap-northeast-1.amazonaws.com/wp-content/uploads/sites/2/2016/04/19011407/Citi-Cash-Back-Card-300x189.png',
            button: [
                { msg: 'Card Benefits - Cashback', title: 'Card Benefits' },
                { msg: 'Requirements', title: 'Requirements' },
                { msg: 'Instant Approval', title: 'Instant Approval' }
            ]
        },
        {
            name: 'citipremiermiles_card',
            title: 'Citi® PremierMiles® Card',
            image: 'https://news.manikarthik.com/wp-content/uploads/Citi_PremierMiles_Card_Review_India.png',
            button: [
                { msg: 'Card Benefits - Premier', title: 'Card Benefits' },
                { msg: 'Requirements', title: 'Requirements' },
                { msg: 'Instant Approval', title: 'Instant Approval' }
            ]
        },
        {
            name: 'shellciti_card',
            title: 'Shell Citi® Card',
            image: 'https://ringgitplus.com/img/card-400/519489e2193821ed4a000083/shell-citi-gold-credit-card.jpg',
            button: [
                { msg: 'Card Benefits - Shell', title: 'Card Benefits' },
                { msg: 'Requirements', title: 'Requirements' },
                { msg: 'Instant Approval', title: 'Instant Approval' }
            ]
        },
        {
            name: 'mercurydrugciti_card',
            title: 'Mercury Drug Citi® Card',
            image: 'https://www.reviewstream.com/images_items/hPxuFV8Qm.png',
            button: [
                { msg: 'Card Benefits - Mercury', title: 'Card Benefits' },
                { msg: 'Requirements', title: 'Requirements' },
                { msg: 'Instant Approval', title: 'Instant Approval' }
            ]
        },
    ],
    credit_card_1: [
        {
            name: 'citireward_card',
            title: 'Citi Rewards® Card',
            image: 'https://ringgitplus.com/img/card-400/57eddcb0655a14fd555f44f0/citi-rewards-world-mastercard.jpg',
            button: [
                { msg: 'Card Benefits - Reward', title: 'Card Benefits' },
                { msg: 'Instant Approval', title: 'Instant Approval' }
            ]
        },
        {
            name: 'citicashback_card',
            title: 'Citi Cash Back® Card',
            image: 'https://cgblogassets.s3-ap-northeast-1.amazonaws.com/wp-content/uploads/sites/2/2016/04/19011407/Citi-Cash-Back-Card-300x189.png',
            button: [
                { msg: 'Card Benefits - Cashback', title: 'Card Benefits' },
                { msg: 'Instant Approval', title: 'Instant Approval' }
            ]
        },
        {
            name: 'citipremiermiles_card',
            title: 'Citi® PremierMiles® Card',
            image: 'https://news.manikarthik.com/wp-content/uploads/Citi_PremierMiles_Card_Review_India.png',
            button: [
                { msg: 'Card Benefits - Premier', title: 'Card Benefits' },
                { msg: 'Instant Approval', title: 'Instant Approval' }
            ]
        },
        {
            name: 'shellciti_card',
            title: 'Shell Citi® Card',
            image: 'https://ringgitplus.com/img/card-400/519489e2193821ed4a000083/shell-citi-gold-credit-card.jpg',
            button: [
                { msg: 'Card Benefits - Shell', title: 'Card Benefits' },
                { msg: 'Instant Approval', title: 'Instant Approval' }
            ]
        },
        {
            name: 'mercurydrugciti_card',
            title: 'Mercury Drug Citi® Card',
            image: 'https://www.reviewstream.com/images_items/hPxuFV8Qm.png',
            button: [
                { msg: 'Card Benefits - Mercury', title: 'Card Benefits' },
                { msg: 'Instant Approval', title: 'Instant Approval' }
            ]
        },
    ],
    menu: [
        {
            name: 'ccl_card',
            title: 'Credit Cards & Loans',
            image: 'https://d11zeux9tyyeep.cloudfront.net/product/868/image_citi_064.17_-_citi_rewards_visa_card_r1_2x_360.png',
            button: [
                { msg: 'Credit Cards', title: 'Credit Cards' },
                { msg: 'Loans', title: 'Loans' }
            ]
        },
        {
            name: 'usage_deals',
            title: 'Usage Deals',
            image: 'https://www.citibank.com.sg/gcb/credit_cards/images/citi_clear_card/slide2.jpg',
            button: [{ msg: 'Usage Deals', title: 'Usage Deals' }]
        }
    ],
    usage_deals: [
        {
            name: 'dining_priv',
            title: '#LovetoDine',
            image: '',
            button: [
                { msg: '#LovetoDine', title: '#LovetoDine' }
            ]
        },
        {
            name: 'travel_priv',
            title: '#LovetoTravel',
            image: '',
            button: [
                { msg: '#LovetoTravel', title: '#LovetoTravel' }
            ]
        },
        {
            name: 'online_priv',
            title: 'Citi Online Deals',
            image: '',
            button: [
                { msg: '#LovetoClick', title: '#LovetoClick' }
            ]
        },        
        // {
        //     name: 'onebill_priv',
        //     title: 'CITI One Bill',
        //     image: '',
        //     button: [
        //         { msg: 'One Bill', title: 'One Bill' }
        //     ]
        // },
        // {
        //     name: 'citiworld_priv',
        //     title: 'Citi World Privileges',
        //     image: '',
        //     button: [
        //         { msg: 'Citi World Privileges', title: 'Citi World Privileges' }
        //     ]
        // }
    ],
    usage_deals_dining : [
        {
            name: 'win_what_you_dine',
            title: '',
            text: '',
            image: '',
            button: [
                { msg: 'Send location', title: 'Win What You Dine' }
            ]
        },
        {
            name: 'bonchon',
            title: 'BonChon',
            text: 'Free Bibimbowl at BonChon',
            image: '',
            button: [
                { msg: 'BonChon', title: 'BonChon' }
            ]
        },
        {
            name: 'periperi',
            title: 'Peri-Peri',
            text: '25% off at Peri-Peri',
            image: '',
            button: [
                { msg: 'Peri-Peri', title: 'Peri-Peri' }
            ]
        }
    ],
    usage_deals_travel : [
        {
            name: 'pal',
            title: 'Philippine Airlines',
            text: 'Up to 50% off on PAL\'s Premium Economy Class.',
            image: '',
            button: [
                { msg: 'PAL', title: 'Select' }
            ]
        },
        {
            name: 'nike',
            title: 'Nike Stadium',
            text: 'Free 6,000 Nike Stadium or Planet Sports eGift',
            image: '',
            button: [
                { msg: 'Nike', title: 'Select' }
            ]
        },
        {
            name: 'cathay',
            title: 'Cathay Pacific',
            text: 'Cathay Pacific Private Sale',
            image: '',
            button: [
                { msg: 'Cathay', title: 'Select' }
            ]
        }
    ],
    usage_deals_online : [
        {
            name: 'love2click',
            title: '#Love2Click',
            text: 'The #Love2Click Online sale is back!',
            image: '',
            button: [
                { msg: 'love2click', title: 'Select' }
            ]
        },
        {
            name: 'powermac',
            title: 'Powermac',
            text: 'Freebies at Powermac.',
            image: '',
            button: [
                { msg: 'powermac', title: 'Select' }
            ]
        },
        {
            name: 'rustan',
            title: 'Rustan\'s',
            text: 'FREE Rustan\'s Gift Certificate worth P2500',
            image: '',
            button: [
                { msg: 'rustans', title: 'Select' }
            ]
        }
    ],
    wwyd: [
        {
            name: 'wwyd',
            title: '',
            text: '',
            image: '',
            button: [
                { url: 'https://www.citibank.com.ph/gcb/promos/dining/what-you-dine.htm?icid=PHPRUSNENSCCPCALM', title: 'Learn More' },
                { url: 'https://www.citibank.com.ph/gcb/creditcards/credit_cards.htm?icid=PHPRUGNENSCCPCAAN', title: 'Apply Now' }
            ]
        }
    ],
    bonchon: [
        {
            name: 'bonchon',
            title: '',
            text: '',
            image: '',
            button: [
                { url: 'https://www.citibank.com.ph/gcb/promos/dining/bonchon.htm?icid=PHPRUL8ENSCCPCALM', title: 'Learn More' },
                { url: 'https://www.citibank.com.ph/gcb/creditcards/credit-cards.htm?icid=PHPRU4YENSCCPCAAN', title: 'Apply Now' }
            ]
        }
    ],
    peri: [
        {
            name: 'pal',
            title: '',
            text: '',
            image: '',
            button: [
                { url: 'https://www.citibank.com.ph/gcb/promos/dining/peri-peri.htm?icid=PHPRUJRENSCCPCALM', title: 'Learn More' },
                { url: 'https://www.citibank.com.ph/gcb/creditcards/credit-cards.htm?icid=PHPRU4YENSCCPCAAN', title: 'Apply Now' }
            ]
        }
    ],
    pal: [
        {
            name: 'peri',
            title: '',
            text: '',
            image: '',
            button: [
                { url: 'https://www.citibank.com.ph/gcb/promos/travel/philippine-airlines.htm?icid=PHLPAOLENPAHCALM', title: 'Learn More' },
                { url: 'https://www.citibank.com.ph/gcb/creditcards/credit-cards.htm?icid=PHPRU4YENSCCPCAAN', title: 'Apply Now' }
            ]
        }
    ],
    nike: [
        {
            name: 'nike',
            title: '',
            text: '',
            image: '',
            button: [
                { url: 'https://www.citibank.com.ph/gcb/promos/others/free-shoes.htm?icid=PHPRUI8ENSCCPCALM', title: 'Learn More' },
                { url: 'https://www.citibank.com.ph/gcb/creditcards/credit-cards.htm?icid=PHPRU4YENSCCPCAAN', title: 'Apply Now' }
            ]
        }
    ],
    cathay: [
        {
            name: 'cathay',
            title: '',
            text: '',
            image: '',
            button: [
                { url: 'https://www.citibank.com.ph/gcb/promos/travel/cathay-pacific.htm?icid=PHPRUCEENSCCPCALM', title: 'Learn More' },
                { url: 'https://www.citibank.com.ph/gcb/creditcards/credit-cards.htm?icid=PHPRU4YENSCCPCAAN', title: 'Apply Now' }
            ]
        }
    ],
    love2click: [
        {
            name: 'love2click',
            title: '',
            text: '',
            image: '',
            button: [
                { url: 'https://www.citibank.com.ph/gcb/promos/promo-click/index.htm?icid=PHUNI30ENPOCPCBLM', title: 'Learn More' }
            ]
        }
    ],
    powermac: [
        {
            name: 'powermac',
            title: '',
            text: '',
            image: '',
            button: [
                { url: 'https://www.citibank.com.ph/gcb/promos/paylite/power-mac-center.htm?icid=PHCTINTENPMCTCBLM', title: 'Learn More' },
                { url: 'https://www.citibank.com.ph/gcb/creditcards/credit-cards.htm?icid=PHPRU4YENSCCPCAAN', title: 'Apply Now' }
            ]
        }
    ],   
    rustan: [
        {
            name: 'rustan',
            title: '',
            text: '',
            image: '',
            button: [
                { url: 'https://www.citibank.com.ph/gcb/promos/paylite/freebies-rustans.htm?icid=PHPRIV7ENPOCPCBLM', title: 'Learn More' },
                { url: 'https://www.citibank.com.ph/gcb/creditcards/credit-cards.htm?icid=PHPRU4YENSCCPCAAN', title: 'Apply Now' }
            ]
        }
    ],   
}

exports.choices = {
    GET_STARTED: ['Let\'s get started', 'Quit'],
    MENU: ['Credit Cards', 'Loans', 'Usage Deals'],
    CREDIT_CARD: ['Learn Rewards', 'Learn Cash', 'Learn Premier', 'Learn Shell', 'Learn Mercury', 'Learn Loans', 'Call Me', 'Back'],
    LEARN_REWARDS: ['Rewards Benefits', 'Rewards Eligibility', 'Rewards Requirements'],
    LEARN_CASH: ['Cash Back Benefits', 'Cash Back Eligibility', 'Cash Back Requirements'],
    LEARN_PREMIER: ['Premier Benefits', 'Premier Eligibility', 'Premier Requirements'],
    LEARN_SHELL: ['Shell Benefits', 'Shell Eligibility', 'Shell Requirements'],
    LEARN_MD: ['Mercury Benefits', 'Mercury Eligibility', 'Mercury Requirements'],
    LEARN_LOANS: ['Loans Benefits', 'Loans Eligibility', 'Loans Requirements'],
    INCOME_RANGE: ['Below 180, 000', 'P180,000 - P499,999', 'P500,000 - P999,999', 'P1M and above'],
    LOAN_INCOME_RANGE: ['Below 250, 000', '250,000 - P499,999', 'P500,000 - P999,999', 'P1M and above'],
    BACK_TO_MENU: ['Back to main menu'],
    USAGE_DEALS: ['Love2Dine', 'Love2Travel', '#LovetoClick']

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