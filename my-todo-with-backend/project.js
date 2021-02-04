const http = require('http');
const fs = require('fs').promises;

const requestListener = function (req, res) {
    switch (req.url) {
        case "/":
        case "/index.html":
            fs.readFile(__dirname + "/index.html")
                .then(contents => {
                    res.setHeader("Content-Type", "text/html");
                    res.writeHead(200);
                    res.end(contents);
                })
            break
        case "/index.js":
            fs.readFile(__dirname + "/index.js")
                .then(contents => {
                    res.setHeader("Content-Type", "text/javascript");
                    res.writeHead(200);
                    res.end(contents);
                })
            break
        case "/authors":
            res.writeHead(200);
            res.end(authors);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error: "Resource not found"}));
    }
};

http.createServer(requestListener).listen(9393);