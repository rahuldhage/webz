const express= require('express')
const app= express()

const mongodb= require('mongodb')
const http= require('http')
const path= require('path')
const mongoose= require('mongoose')

mongoose.connect('mongodb+srv://rahul_dz:mmzzqqpp@cluster0.z5q9m.mongodb.net/majorz?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, function(error) {

            if(error){
                console.log("Error!");
            }
            console.log("No Error");


            const qq= mongoose.Schema({
                name:String,
                age:Number
            })

            const qqq=mongoose.model("Myapz",qq)

            const qqqq= qqq({
                name:"Hello",
                age:55
            })

            qqqq.save();


app.get('/',function(req,res){

        res.send("Hi")

 })


})

const sv= http.createServer(app);
sv.listen(process.env.PORT||3000,function(error,result){

            if(error){
                console.log("Error!");
            }
            console.log("No error!");

})
//sv.listen(process.env.PORT||3000,function(error,result){
    
