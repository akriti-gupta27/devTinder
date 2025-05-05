const express = require("express");

const app = express();

app.get("/user", (req,res) => {
    res.send({firstName: "Akriti", lastName: "Gupta"});
});

app.post("/user", (req,res) => {
    res.send("Data saved successfully");
})

app.delete("/user", (req,res) => {
    res.send("Deleted successsfully");
})

app.use("/test", (req, res) => {
    res.send("Hello from server");
});

app.listen(3000, ()=> {
    console.log("server up at 3000");
});
