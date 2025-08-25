const express = require("express")
const app = express()
const path = require("path")
const port = 5000
const db = require("./config/db")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }))
app.use('/', require("./routers/index"))
app.use(express.static('public'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return
    }

    console.log("Server started successfuly on port : ", port);
})