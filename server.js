////////////////////////
// Setup - Import deps and create app object
////////////////////////
const expressServer = require("express"); //bring in express library
const req = require("express/lib/request");
const requestHandler = expressServer();
const PORT = process.env.PORT || 3000; //allows deployment apps like Heroku to plug in its own port no.
const GREETING = "Welcome to localhost:" + PORT

//we go to localhostPORT because the server is on this computer i.e., it is "local"


//////////////////////
// Declare Middleware
//////////////////////


///////////////////////
// Declare Routes and Routers 
///////////////////////

//routes are a special type of Middleware
//get requests
//servers generally communicate with each other by sending a bunch of headers.  Express does this in the background.

requestHandler.get("/", (req, res) =>{
    res.send(GREETING);
});

requestHandler.get("/greeting", (req, res) =>{
    res.send(GREETING);
});

requestHandler.get("/greeting/:name", (req, res) =>{ //This akin to initializing an object property using object literal notation: object.name | The object property value is assigned in the address box when the user makes a request.
    res.send(GREETING + ", " + req.params.name + "! Happy to have you here!");
});


///////////////////////////
// Server Listener
///////////////////////////

requestHandler.listen(PORT, ()=>{
    console.log("Listening on port" + PORT)
});