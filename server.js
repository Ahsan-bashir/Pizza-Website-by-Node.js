const http = require('http')
const express=require('express')

const app=express()


// ------------------------Server Created By Using Express.js ------------------------------

app.get("/",(req,res)=>{
    res.sendFile("index.html",{root:"."})
})

http.createServer(app).listen(3000)







//--------------------Server Created Using Simply Node.js ---------------------------

// http.createServer((request, response) => {
//     if (request.url === '/') {
//         console.log(request.url);
//         response.writeHead(200, { 'content-type': "text/html" })
//         response.write("<h1> Pizza </h1>")
//         response.end()
//     }else if(request.url === '/menu'){
//         console.log(request.url);
//         response.writeHead(200, { 'content-type': "text/html" })
//         response.write("<h1> Pepperoni </h1>")
//         response.end()
//     }
// }).listen(3000)