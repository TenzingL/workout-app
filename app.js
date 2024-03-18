const handlebars = require('hbs');
const express = require('express');
const app = express();
app.use(express.static('css'))
app.listen(3000, () => {
    console.log('listening on port 3000')
})

app.get("/", (req, res) => {
    res.render("index.hbs")
})