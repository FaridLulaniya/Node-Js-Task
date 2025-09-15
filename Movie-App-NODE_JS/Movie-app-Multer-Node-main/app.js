const express = require("express")
const app = express()
const port = 8000
const path = require("path")
const dataBase = require("./config/db")

app.set("view engine", "ejs")
app.set("/", path.join(__dirname, "views"))

app.use(express.urlencoded({ extended: true }))
app.use("/", express.static(path.join(__dirname, "assets")))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))
app.use("/", require("./routes/index"))


app.listen(port, (err) => {
    if (err) {
        console.log("App js error:", err);
        return
    }
    console.log(`Server susefuly run on : http://localhost:${port}`);
})