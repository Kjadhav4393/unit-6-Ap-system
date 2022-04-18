const express =require ("express")

const Resident=require("../model/residentModel")

const router=express.Router()

router.get("",async(req,res)=>{
    const resident= await Resident.find().lean().exec()
    return res.send(resident)
})

router.post("",async(req,res)=>{
    const resident= await Resident.create(req.body)
    return res.send(resident)
})


module.exports=router