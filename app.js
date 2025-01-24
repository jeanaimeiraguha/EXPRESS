//Let's Create an express js server
const express=require('express');
const port=8080;
const app=express();
app.get('/',(req,res)=>{
     res.send("Hello Express");
})
app.listen(port,()=>{
     console.log("Server is running on http://localhost:8080")
})
