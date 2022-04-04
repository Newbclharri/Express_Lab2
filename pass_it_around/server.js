////////////////////////
// Setup - Import deps and create app object
////////////////////////
const expressServer = require("express");
const app = expressServer();
const PORT = process.env.PORT || 3000;
const TYPE = "soda"
let font_size = "font-size: 25px", display = "display: block", margin_top = "margin-top: 10px", margin_left = "margin-left: 175px", width = "width: fit-content", color = "color: blue";
let num_bottles = 99;

//////////////////////
// Declare Middleware
//////////////////////


///////////////////////
// Declare Routes and Routers 
///////////////////////

//localhost:PORT#/
app.get("/", (req, res) =>{
    console.log("root")
    num_bottles = 99;
    res.send(`
    <h1> <span syle="${color}">${num_bottles}</span> Bottles of ${TYPE} on the wall.
        <span style="color: white">${num_bottles--}</span>
        <a href="/${num_bottles}" style="${font_size}; ${display}; ${margin_top}; ${margin_left}; ${width}">Take one down. Pass it around.</a>
    </h1>`);

});

//localhost:PORT#/98
app.get(`/98`, (req, res) =>{
    res.send(`
        <h1> <span style="${color}: blue">98</span> bottles of ${TYPE} on the wall.</h1> 
        <h4 style="color: purple">Enter number of bottles in place of <span style="color: blue">98</span> in the url above!</h4>`
    );
});

//localhost:PORT#/: (User enters number | handles request to ensure a number)
app.get('/:bottlesRemaining', (req, res)=>{
    num_bottles = parseInt(req.params.bottlesRemaining); 
    if(!num_bottles && num_bottles !== 0){
        res.send(`<h1>Enter a valid number</h1>`)
    }   
    if(num_bottles === 0){
        res.send(`
            <h1 style="margin-left: 65vh">You chugged it all! <span style="color: red">${num_bottles}</span> Bottles of ${TYPE} on the wall!
                <a href="/" style="${font_size}; ${display}; ${margin_top}; ${margin_left}; ${width}; margin-left: 28vh">Play Again?</a>
                <iframe style="margin-left: 10vh" src="https://giphy.com/embed/acIy5aKe4nryg" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>
            </h1>`
        );
    }else{
        if(num_bottles < 10){
        color = "color: red";
        }

        res.send(`        
            <h1> <span style="${color}">${num_bottles}</span> Bottles of ${TYPE} on the wall.
                <span style="color: white">${num_bottles--}</span>
                <a href="/${num_bottles}}" style="${font_size}; ${display}; ${margin_top}; ${margin_left}; ${width}">Take one down. Pass it around.</a>
            </h1>`
        );
    }
   
});

///////////////////////////
// Server Listener
///////////////////////////

app.listen(PORT,()=>{
    console.log("Listening on port " + PORT);
});