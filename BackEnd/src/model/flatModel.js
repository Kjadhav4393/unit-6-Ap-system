const mongoose =require ("mongoose")

const flatSchema=new mongoose.Schema({
    Owner:{type:String,required:true},
    Block:{type:String,required:true},
    No:{type:String,required:true},
    resident_id:{type:mongoose.Schema.Types.ObjectId,ref:"resident",required:true}

},
{
    versionKey:false,
    timestamps:true
}
)

module.exports=mongoose.model("flat",flatSchema)