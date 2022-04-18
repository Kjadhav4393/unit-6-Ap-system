const mongoose =require ("mongoose")

const residentSchema=new mongoose.Schema({
    Name:{type:String,required:true},
    Gender:{type:String,required:true},
    Age:{type:String,required:true},

},
{
    versionKey:false,
    timestamps:true
}
)

module.exports=mongoose.model("resident",residentSchema)