//Requiring the HTTP module
const http = require('http');
//Creating the server with the http method of a HTTP module.
//The arguments of createServer are both objects.
const server = http.createServer((request, respond) => {
//console.log(request) this logs our request object.
    //If our request url is equal to homepeage, we display welcome message.
    if (request.url === '/') {
        respond.end("Welcome...")
    } 
    
})


//Deciding what port our server will listen to.
server.listen(5000)