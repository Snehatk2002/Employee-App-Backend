const mongoose = require("mongoose")
const schema=mongoose.Schema(
{
"employeeid":{type:String,required:true},
"employeename":{type:String,required:true},
"designation":{type:String,required:true},
"salary":{type:String,required:true}

}
)
let employeemodel=mongoose.model("employees",schema)
module.exports={employeemodel}