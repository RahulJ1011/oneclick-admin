const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true
        },
        companyName:
        {
            type:String,
            required:true
        },
        Password:
        {
            type:String,
            required:true
        },
        Email:
        {
            type:String,
            required:true
        }
    }
)

const user = mongoose.Model("user",userSchema);
module.exports = user;