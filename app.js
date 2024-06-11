const express =require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {employeemodel}=require("./models/employee")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://snehatk:6282011259@cluster0.jd3vcot.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let employee =new employeemodel(input)
    employee.save()
    console.log(employee)
    res.json({"status":"success"})
})
app.get("/view",(req,res)=>{
    employeemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch()
})



app.listen(8080,()=>{
    console.log("SERVER STARTED")
})