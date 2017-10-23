module.exports = {
    logIncomingMessage: function (event, next) {
        console.log(event);          
        next();      
    }
}