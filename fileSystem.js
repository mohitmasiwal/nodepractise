 const fs = require('fs');
 let name1 = document.getElementById('name').value;
 const getdata=()=>{
   
   
    fs.writeFile("login.txt", name1, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log("File created successfully!");
        }
      });

 };


 
 


 

