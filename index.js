 // Import the HTTP module
const http = require("http");

 
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Send a response based on the requested URL
    if (req.url === "/") {
        res.end("Welcome to the Home Page!");
    } else if (req.url === "/about") {
        res.end("This is the About Page.");
    } else {
        res.end("404: Page not found.");
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
