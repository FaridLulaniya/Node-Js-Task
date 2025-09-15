const modelSchema = require("../model/modelMovie")
const fs = require("fs")

// render home page with DB data
module.exports.home = async (req, res) => {
    try {
        const datas = await modelSchema.find({})
        return res.render("home", { datas })
    } catch (error) {
        console.log(err);
        return res.render("404")
    }

}

// go to the dashboard

module.exports.dashboard = async (req, res) => {
    try {
        const datas = await modelSchema.find({})
        console.log(datas);

        return res.render("dashboard", { datas })
    } catch (error) {
        console.log(err);
        return res.render("404")
    }
}
//edit Movie page
module.exports.editMovie = async (req, res) => {

    const id = req.params.id
    console.log("Edir movie id :", id);

    try {
        const oneData = await modelSchema.findById(id)
        if (oneData) {
            console.log("Edit thi data :", oneData);

            return res.render("editPage", { oneData })
        } else {
            console.log("Data not found");
            return res.render("404")
        }

    } catch (error) {
        console.log(err);
        return res.render("404")
    }
}
module.exports.updateMovie = async (req, res) => {

    const id = req.params.id
    try {

        const oldData = await modelSchema.findById(id)
        const newImage = req.file

        if (oldData.image && newImage) {
            fs.unlinkSync(oldData.image)
        }
        const editedData = req.body
        editedData.image = req.file ? req.file.path : ""
        
        const updatedData = await modelSchema.findByIdAndUpdate(id, editedData)
        if (updatedData) {
            console.log("Updated succesfully");
            return res.redirect("/")
        } else {
            console.log("Data not updated !");
            return res.render("404")
        }

    } catch (error) {
        console.log(err);
        return res.render("404")
    }
}

// for render add movie form
module.exports.newMovieForm = (req, res) => {

    return res.render("addMovie")

}
// add new movie in DB
module.exports.addedNewMovie = async (req, res) => {


    console.log(req.file);
    const imagePath = req.file ? req.file.path : ""
    const datas = req.body
    datas.image = imagePath

    console.log("Data with image path : ", datas);

    try {

        const newData = await modelSchema.create(datas)

        console.log(newData);
        console.log("new data added ! ! !");
        return res.redirect("/dashboard")
    } catch (error) {
        console.log(error);
    }

}

// delete movie
module.exports.deleteMovie = async (req, res) => {
    const id = req.params.id
    console.log("delete movie's id : ", id);

    try {

        const deleteMovie = await modelSchema.findByIdAndDelete(id)
    console.log("delete movie's data : ", deleteMovie   );

        // if(deleteMovie.image){
        //     fs.unlinkSync(deleteMovie.image)
        // }
        if (deleteMovie) {
            console.log("movie dleted succesfully !");
            return res.redirect("/dashboard")
        } else {
            console.log("Can't delete movie");
            return res.render("404")
        }

    } catch (error) {
        console.log(error);
        return res.render("404")
    }

}