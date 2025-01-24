//Let's an express js server
const express=require('express');
const app=express();
app.get('/',(res,req)=>{
     res.send("Hello Express")
})
app.listen(3000,()=>{
     console.log("Server is running on http://localhost:3000")
})
