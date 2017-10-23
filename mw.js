module.exports = {
    logIncomingMessage: function (event, next) {
        console.log(JSON.stringify(event.entities[0].geo));        
        next();      
    }
}