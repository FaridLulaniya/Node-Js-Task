const express = require("express")
const multer = require("multer")
const ctrl = require("../controllers/controller")
const routes = express.Router()

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: fileStorage }).single("image")

routes.get("/", ctrl.home)
routes.get("/newMovie", ctrl.newMovieForm)
routes.post("/addNewMovie", upload, ctrl.addedNewMovie)
routes.get("/dashboard", ctrl.dashboard)
routes.get("/editMovie/:id", ctrl.editMovie)
routes.post("/updatedMovie/:id", upload, ctrl.updateMovie)
routes.get("/deleteMovie/:id", ctrl.deleteMovie)

module.exports = routes