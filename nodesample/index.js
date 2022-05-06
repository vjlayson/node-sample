const http = require("http");
const hostName = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader("Content-type", "text/html");
    // res.end("Welcome Batch Frontier");

    if (req.url == "/"){
        res.writeHead(200, {
            "Content-type": "text/html"
        });
        res.write("<h2>This is the home</h2>");
        res.end();
    }
});

server.listen(port, hostName, () => {
    console.log(`server running at http://${hostName}:${port}`);
});