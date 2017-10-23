module.exports = {
    logIncomingMessage: function (event, next) {
        console.log(JSON.stringify(event.geo));          
        next();      
    }
}