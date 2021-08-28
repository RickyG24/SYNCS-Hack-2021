const express = require("express")
const {uuid} = require('uuidv4');
const cors = require("cors")

var app = express()

app.use(express.json())
app.use(cors())

const emails = {
}

app.get("/:id", (req, res) => {
    const id = req.params.id;
    
    if (emails[id]) {
        res.send(emails[id])
    } else {
        res.status(404)
    }

})


app.post("/mail", (req, res) => {
    const {mail} = req.body;

    const id = uuid()

    emails[id] = mail;

    res.send({'id': id});
})


app.listen(3333, function () {
console.log("Started application on port %d", 3333)
});
