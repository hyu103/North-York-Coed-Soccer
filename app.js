const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

class Account {
    constructor(firstName, lastName, phoneNumber, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }
}

app.post("/newAccount", function(req, res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const password = req.body.password;

    let acct = new Account(firstName, lastName, phoneNumber, email, password);
    
    res.redirect("/");
});

app.post("/login", function(req, res) {
    const email = req.body.emailInput;
    const password = req.body.passwordInput;
    const loginSuccess = false;
    if(email == acct.email && password == acct.password) {
        loginSuccess = true;
    }
    console.log(loginSuccess);
})

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/newAccount", function(req, res){
    res.sendFile(__dirname + "/newAccount.html");
})

app.listen(3000, function() {
    console.log("Server running on port 3000");
});

