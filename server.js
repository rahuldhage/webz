const express= require('express')
const app= express()

const http= require('http')
const path= require('path')

app.get('/',function(req,res){

        res.sendFile(path.join(__dirname,'public','index.html'))

})


const sv= http.createServer(app);
sv.listen(process.env.PORT||3000,function(error,result){

            if(error){
                console.log("Error!");
            }
            console.log("No error!");

})

