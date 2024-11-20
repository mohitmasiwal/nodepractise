const http = require('http');
 const port = 3000;

 const myserver = http.createServer((req, res) => {
    res.end("all good")

    myserver.listen((port,()=>{
        console.log("sever running");
        
    }))
 })
