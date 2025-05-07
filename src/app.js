const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user")

app.use(express.json());

app.post("/signup", async (req,res)=> {
    const user = new User(req.body);
    try{
        await user.save();
        res.send("User added successfully");
    } catch (err){
        res.status(400).send("Error saving the user" + err.message);
    }
    
})

app.get("/user", async (req,res) => {
    const email = req.body.emailId;
    try{
        const user = await User.find({emailId : email});
        res.send(user);
    }catch(err){
        res.status(400).send("Something went wrong");
    }
})

app.get("/feed", async(req,res)=> {
    try{
        const users = await User.find({});
        res.send(users);
    }catch{
        res.status(400).send("Not found");
    }
})

app.delete("/user", async(req,res) => {
    const userId = req.body.userId;
    try{
        const user = await User.findByIdAndDelete(userId);
        res.send("user deleted successfully");
    }catch{
        res.status(400).send("Not found");
    }
})

app.patch("/user", async(req,res) => {
    const userId = req.body.userId;
    const data = req.body;
    try{
        await User.findByIdAndUpdate({_id: userId}, data, {
            runValidators:true
        });
        res.send("user Updated Successfully"); 
    }catch{
        res.status(400).send("Update Failed");
    }
})

connectDB().then(() => {
    console.log("Database connection established....");
    app.listen(3000, ()=> {
        console.log("server up at 3000");
    });
}).catch(err => {
    console.log("Database connection not established....")
}) 


