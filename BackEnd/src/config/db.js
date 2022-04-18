const mongoose=require("mongoose")


function connect() {
    return mongoose.connect("mongodb+srv://kamlesh:kamlesh123@cluster0.l2fo0.mongodb.net/apartment")
}
module.exports=connect