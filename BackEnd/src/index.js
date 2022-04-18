const express=require("express")
const connect=require("./config/db")

const resident=require("./controller/resident.Contoller")
const flat=require("./controller/flatController")
 
const app=express()

app.use(express.json())

app.use("/resident",resident)
app.use("/flat",flat)

app.listen(4393,async()=>{
try {
    await connect()
    console.log("Sucessfull Port is Running")
} catch (error) {
    console.log(error.message)
}
})