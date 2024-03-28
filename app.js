const handlebars = require('hbs');
const express = require('express');
const app = express();
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

app.post("/Login-Attempt", (req, res) => {
    console.log(`Username: ${req.body.username}\nPassword: ${req.body.password}`)
    res.send("Thank you for logging in")
})

