 
const fs = require("fs");

fs.readFile("read.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error in reading file:", err);
    } else {
        console.log("File content:", data);
    }
});


 const data =fs.readFileSync("read.txt","utf8")
 console.log(data)