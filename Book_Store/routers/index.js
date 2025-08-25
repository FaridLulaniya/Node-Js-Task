const express = require("express")
const adminController = require("../controllers/adminCTR")
const routes = express.Router()

routes.get("/", adminController.home)
routes.get("/dashboard", adminController.dashbaord)
routes.get("/addBookForm", adminController.addBookForm)
routes.post("/addNewBookData", adminController.addNewBookData)
routes.get("/editBook/:id", adminController.editBook)
routes.post("/editBookSubmit/:id", adminController.editBookSubmitted)
routes.get("/deleteBook/:id", adminController.deleteBook)

module.exports = routes