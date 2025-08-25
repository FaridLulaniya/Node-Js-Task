const Model = require("../models/modelsTable")

module.exports.home = async (req, res) => {
    try {

        const data = await Model.find({})

        return res.render("home", { DBData: data })
    } catch (e) {
        console.log(e);
        return res.render("404")

    }
}

module.exports.dashbaord = async (req, res) => {

    try {
        const mongoData = await Model.find({})
        console.log(mongoData);
        return res.render("dashboard", { bookDetails: mongoData })
    } catch (err) {
        console.log(err);
        return res.render("404")
    }

}

module.exports.addBookForm = async (req, res) => {
    return res.render("addBook")
}

module.exports.addNewBookData = async (req, res) => {
    console.log(req.body);
    const { title, author, category, price, image, description } = req.body

    try {
        const bookAdded = await Model.create({
            title,
            author,
            category,
            price,
            image,
            description
        })

        if (bookAdded) {
            console.log("Book addes sussesfully !");
            res.redirect("/dashboard")
        }
        console.log(bookAdded);

    } catch (e) {
        console.log(e);
        return res.render("404")
    }
}

module.exports.editBook = async (req, res) => {

    const id = req.params.id
    try {
        const dataForEdit = await Model.findById(id)
        console.log(dataForEdit);
        return res.render("editBook", { editBookData: dataForEdit, id: id })

    } catch (e) {
        console.log(e);
        return res.render("404")

    }
}

module.exports.editBookSubmitted = async (req, res) => {

    const id = req.params.id
    const editedData = req.body
    try {
        const bookEdit = await Model.findByIdAndUpdate( id,{ editedData })
        if (!bookEdit) {
            console.log("Book cant eidted");
            return res.render("404")
        }
        
        return res.redirect("/dashboard")
    } catch (e) {
        console.log(e);
        return res.render("404")
    }

}
module.exports.deleteBook = async (req, res) => {

    const id = req.params.id
    console.log("Delete: ", id);
    try {

        const deletedBook = await Model.findByIdAndDelete(id)
        if (!deletedBook) {
            console.log("Book not found !")
            return res.render("404")
        }
        console.log("Book deleted successfully !");
        return res.redirect("/dashboard")


    } catch (e) {
        console.log(e);
        return res.render("404")
    }
}