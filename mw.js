module.exports = {
    logIncomingMessage: function (event, next) {
        console.log(JSON.stringify(event.sourceEvent.entities.geo));          
        next();      
    }
}