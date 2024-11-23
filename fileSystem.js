 
const { log } = require("console");
const fs = require("fs");

fs.readFile("new.txt","UTF-8", (err,data)=>{
    console.log(data)
    console.log(err)
})

