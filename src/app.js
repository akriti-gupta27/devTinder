const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user")

app.post("/signup", async (req,res)=> {
    const user = new User({
        firstName : "Akshay",
        lastName : "Saini",
        emailId: "akshay@saini.com",
        password: "akshay@123"
    });
    await user.save();
    res.send("User added successfully");
})

connectDB().then(() => {
    console.log("Database connection established....");
    app.listen(3000, ()=> {
        console.log("server up at 3000");
    });
}).catch(err => {
    console.log("Database connection not established....")
}) 


