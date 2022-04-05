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
const rageGifs = [
    /*0*/ `<iframe src="https://giphy.com/embed/YGfabYi6K568aL80Eh" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`,
    /*1*/ `<iframe src="https://giphy.com/embed/SfYTJuxdAbsVW" width="480" height="382" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`,
    /*2*/ `<iframe src="https://giphy.com/embed/qFi3fACSMnP4Q" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`,
    /*3*/ `<iframe src="https://giphy.com/embed/hqU9Xllx4O9uq0TjAn" width="480" height="382" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`,
    /*4*/ `<iframe src="https://giphy.com/embed/v4LP2DsVKBHSE" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`,
    /*5*/ `<iframe src="https://giphy.com/embed/4DbLWs63sRPwY" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`,
    /*6*/`<iframe src="https://giphy.com/embed/NVoFUKNbJfQoE" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`,
    /*7*/ `<iframe src="https://giphy.com/embed/H9RL1IKvsBi6c" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`,
    /*8*/ `<iframe src="https://giphy.com/embed/EPsdF1SvWrzHy" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`,
    /*9*/ `<iframe src="https://giphy.com/embed/12i3TW7x8vp7sQ" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`
]

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
        <h1> <span style="${color}">${num_bugs}</span> little bugs</h1>
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
        const gif = Math.floor(Math.random() * rageGifs.length)
        res.send(`
            <h1 style="margin-left: 65vh">Congrats! <span style="color: red">${num_bugs}</span> little bugs in the code!?! Turn in your assignment!
                <a href="/" style="${font_size}; ${display}; ${margin_top}; ${margin_left}">Play Again?</a>
                ${rageGifs[gif]}
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
            <h1>Take one down.</h1>
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
            <h1>Take one down.</h1>
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