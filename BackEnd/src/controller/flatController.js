const express =require ("express")

const Flat=require("../model/flatModel")

const router=express.Router()

router.get("",async(req,res)=>{
    const flat=await Flat.find().populate({path:"resident_id",select:["Name","Age","Gender"]}).lean().exec()
    return res.send(flat)
})

router.post("",async(req,res)=>{
    const flat=await Flat.create(req.body)
    return res.send(flat)
})


module.exports=router