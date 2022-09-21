//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/bmiCalculator" , function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {

        var weight = parseFloat(req.body.weight);
        var hight = parseFloat(req.body.hight);
        var bmi = weight / (hight * hight);
   
        res.send("Your BMI is  : " + bmi);
    });

app.listen(3000 , function(){
    console.log("server started an port 3000");
});