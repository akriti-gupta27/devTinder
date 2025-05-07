const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true,
        minLength:4
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true,
    },
    age:{
        type: Number
    },
    gender:{
        type: String,
        validate(value){
            if(!["male", "female", "others"].includes(value)){
                throw new Error("Gender data is not valid");
            }
        }
    },
    photoUrl:{
        type: String,
        default: "https://www.pnrao.com/?attachment_id=8917"
    },
    about: {
        type: String,
        default: "This is a default about of the user"
    },
    skills: {
        type: [String]
    }
},{
    timestamps:true
}
)


module.exports = mongoose.model("User", userSchema);