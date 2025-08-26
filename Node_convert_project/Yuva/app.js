const express = require("express")
const app = express()
const path = require("path")
const port = 8000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use("/", express.static(path.join(__dirname, "assets")))


app.get("/", (req, res) => {
    return res.render("index")
})
app.get("/contact", (req, res) => {
    return res.render("contact")
})

app.listen(port, (err) => {

    if (err) {
        console.log(err);
        return
    }
    console.log(`server start on : http://localhost:${port}`);

})