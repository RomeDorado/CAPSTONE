module.exports = {
    logIncomingMessage: function (event, next) {
        console.log(JSON.stringify(event.sourceEvent.entities[0].geo));
        session.send()          
        next();      
    }
}