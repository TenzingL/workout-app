const handlebars = require('hbs');
const express = require('express');
const app = express();
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'dbr.fast.sheridanc.on.ca',
  user     : 's7_lamatenz',
  password : '991756807',
  database : 'HR'
});
 

app.use(express.static('css'))
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => {
    console.log('listening on port 3000')
})

app.get("/", (req, res) => {
    res.render("index.hbs")
})

app.get("/Create-Account", (req, res) => {
    res.render("create-acc.hbs")
})

app.post("/Creating-Account", (req, res) => {

})

app.post("/Login-Attempt", (req, res) => {
    connection.connect();
    console.log(`Username: ${req.body.username}\nPassword: ${req.body.password}`)
    connection.query(`SELECT username, password FROM USERS
    WHERE username = ${req.body.username} AND password = ${req.body.password}`, (err, results)=>{
        if (!err) {
            res.render("main.hbs", {
                username: req.body.username
            });
        }
        else {
            res.render("index.hbs")
        }
    })
    res.send("Thank you for logging in")
})

