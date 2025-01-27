const http =require('http')
http.createServer((req,res)=>{
     res.write('Hello Dev')
}).listen(8080,()=>{
     console.log("Server is running on http://localhost:8080")
})