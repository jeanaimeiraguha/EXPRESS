// //Let's Create an express js server
// const express=require('express');
// const port=8081;
// const app=express();
// app.get('/',(req,res)=>{
//      res.send("Hello Express");
// })
// app.listen(port,()=>{
//      console.log("Server is running on http://localhost:8080")
// })






// Let's Create an Express.js server
const express = require('express');
const port = 1000;
const app = express();

app.get('/', (req, res) => {
    res.send("Hello Express");
});
app.get('/home',()=>{
     res.send("Welcome to Home Page");
})
app.post('/login',()=>{
     res.send("Loging In ....");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
