 
const http = require("http");

 
const PORT = 3000;

 
const server = http.createServer((req, res) => {
     
    res.writeHead(200, { "Content-Type": "text/plain" });

  
    if (req.url === "/") {
        res.end("Welcome to the Home Page!");
    } else if (req.url === "/about") {
        res.end("This is the About Page.");
    } else {
        res.end("404: Page not found.");
    }
});

 
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
