////////////////////////
// Setup - Import deps and create app object
////////////////////////
const expressServer = require("express"); //bring in express library
const req = require("express/lib/request");
const requestHandler = expressServer(); //this is conventionally declared as "app". I chose this variable naming convention for learning purposes to emphasize the concept
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

//localhost300/greeting
requestHandler.get("/greeting", (req, res) =>{
    res.send(GREETING);
});

//localhost300/greeting/Stranger
requestHandler.get("/greeting/:name", (req, res) =>{ //This is akin to initializing an object property using object literal notation: object.name | The object property value is assigned in the address box when the user makes a request.
    res.send(GREETING + ", " + req.params.name + "! Happy to have you here!");
});

//Tip Calculator
//localhost300/tip/100/.15
requestHandler.get("/tip/:total/:tipPercent", (req, res) =>{
    let total_bill = parseFloat(req.params.total);
    let tip_Percent = parseFloat(req.params.tipPercent) //anything entered in the url is a string.  parseInt/parseFloat/etc... any parameter values to work with integers for arithmetic operations
    let total_tip = null;
    total_tip = total_bill * tip_Percent;

    res.send(tip_Percent*100 + "% of " + req.params.total + " = $" + total_tip);
});

/*
    Magic 8 Ball
    localhost3000/magic/:question
    question = Will%20I%20become%20a%20successful%20and%20employed%20developer%20?
*/
requestHandler.get("/magic/:question", (req, res)=>{
    const like_magic = {response: ["It is certain", "It is dedcidedly so","Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]}
    const length = like_magic.response.length;
    let index = Math.floor(Math.random()*length);
    console.log(index);
    res.send(`<h1>${like_magic.response[index]}</h1>`);
});

///////////////////////////
// Server Listener
///////////////////////////

requestHandler.listen(PORT, ()=>{
    console.log("Listening on port " + PORT)
});