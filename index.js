const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');

app.set('view engine','ejs');

const session = require('express-session');
app.use(session({ resave: false, secret: 'mysecret', saveUninitialized: true }));

const logmiddleware = (req, res, next) => {
    console.log('req.url :>> ', req.url);
    next();
}

app.use("/", logmiddleware);
app.use(express.static('public'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.get("/myFile", (req,res) =>{
    console.log("sending my file to ejs template");
    res.render("myFile", getData() );
});

function getData(){
    return {
        name:"The_Name",
        color:"Red",
        messages : [
            "Exam of subj_1 on 16 Dec",
            "Exam of subj_2 on 20 Dec",
            "Christmas Holidays from 23 Dec"
        ]
    }
}

app.get("/", (req,res) => {
    // res.end("server is running");}
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.post("/login", (req,res) => {
    // res.end("Login request received");
    console.log('req.body.username :>> ', req.body.username);
    console.log('req.body.password :>> ', req.body.password);
 

    if(req.body.username == req.body.password) {
        //save the data in session object-----------------------------------------------

        req.session.username = req.body.username;
        req.session.logintime = new Date();
        res.end("Login successful");
    } else {
        res.end("Login failed");
    }
});

app.get("/info",(req,res) =>{
    if(req.session.username){
        res.write("Here is the information for: " + req.session.username + "\n");
        res.end("Login time: " + req.session.logintime);

    }
    else{
        res.redirect("/");
    }
});

app.listen(3030, () => console.log("Server Running on 3030"));



/*
npm install --save ejs
const ejs = require('ejs');
app.set('view engine', 'ejs');

res.render(htmlfilename, data): search for ejs file in views folder
res.end, res.sendFile, res.json, res.writef
*/