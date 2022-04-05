////////////////////////
// Setup - Import deps and create app object
////////////////////////
const expressServer = require("express");
const app = expressServer();
const PORT = process.env.PORT || 3000;
const TYPE = "soda"
const CAP = 200;
let font_size = "font-size: 25px", display = "display: block", margin_top = "margin-top: 10px", margin_left = "margin-left: 175px", width = "width: fit-content", color = "color: blue";
let num_bugs = 99;
let largestNum = num_bugs;
// let smallestNum = largestNum-1;

//////////////////////
// Declare Middleware
//////////////////////


///////////////////////
// Declare Routes and Routers 
///////////////////////

//localhost:PORT#/
app.get("/", (req, res) =>{
    console.log("root")
    num_bugs = 99;
    res.send(`
        <h1> <span style="${color}">${num_bugs}</span> little bugs in the code.</h1>
        <h1> <span style="${color}">${num_bugs}</span> little bugs.</h1>
        <h1>Take one down.</h1>        
        <p style="color: blue; position: absolute; top: 0px; right: 0px">${num_bugs--}</p>
        <h1><a href="/${num_bugs}" style="${display};${width}">Pass it around.</a></h1>`
    );
});



//localhost:PORT#/: (User enters number | handles request to ensure a number)
app.get('/:bugsRemaining', (req, res)=>{
    num_bugs = parseInt(req.params.bugsRemaining); 
    if(!num_bugs && num_bugs !== 0){
        res.send(`<h1>Enter a valid number</h1>`)
    }   
    if(num_bugs === 0){
        res.send(`
            <h1 style="margin-left: 65vh">Congrats! <span style="color: red">${num_bugs}</span> little bugs in the code!?! Turn in your assignment!
                <a href="/" style="${font_size}; ${display}; ${margin_top}; ${margin_left}; ${width}; margin-left: 28vh">Play Again?</a>
                <iframe src="https://giphy.com/embed/SfYTJuxdAbsVW" width="480" height="382" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
            </h1>`
        );
    }else{
        const percent = 0.02, num_random = +Math.random().toFixed(2);
        console.log("Random Number: " + num_random)
        const prev_num = num_bugs;
        let more_bugs = false;
        if(largestNum < CAP){
            largestNum++;
        }
        if(num_random < percent){
            // num_bugs = Math.floor(Math.random()*(largestNum - smallestNum + 1)) + smallestNum;
            more_bugs = true;
            num_bugs = largestNum;
        }else{
            largestNum--;
        }
        if(num_bugs < 10){
        color = "color: red";
        }

        if(more_bugs){
            res.send(`        
            <h1> <span style="${color}">${prev_num}</span> little bugs in the code.</h1>
            <h1> <span style="${color}">${prev_num}</span> little bugs</h1>
            <h1>Take one down</h1>
            <p style="color: blue; position: absolute; top: 0px; right: 0px">${num_bugs--}</p>
            <h1>
                <a href="/${num_bugs}" style="${display}; ${width}">Pass it around.</a>
            </h1>
            <h1><span style="color: red">${num_bugs}</span> little bugs in the code.</h1>`
            );
        }
        res.send(`        
            <h1> <span style="${color}">${num_bugs}</span> little bugs in the code.</h1>
            <h1> <span style="${color}">${num_bugs}</span> little bugs</h1>
            <h1>Take one down</h1>
            <p style="color: blue; position: absolute; top: 0px; right: 0px">${num_bugs--}</p>
            <h1>
                <a href="/${num_bugs}" style="${display}; ${width}">Pass it around.</a>
            </h1>`
        );
    }
   
});

//localhost:PORT#/98
app.get(`/98`, (req, res) =>{
    res.send(`
        <h1> <span style="${color}: blue">98</span> bottles of ${TYPE} on the wall.</h1> 
        <h4 style="color: purple">Enter number of bottles in place of <span style="color: blue">98</span> in the url above!</h4>`
    );
});

///////////////////////////
// Server Listener
///////////////////////////

app.listen(PORT,()=>{
    console.log("Listening on port " + PORT);
});