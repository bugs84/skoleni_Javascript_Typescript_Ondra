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
        case "/todos":
            switch (req.method) {
                case "GET" :
                    fs.readFile(__dirname + "/storage/todos.json")
                        .then(contents => {
                            res.setHeader("Content-Type", "application/json");
                            res.writeHead(200);
                            res.end(contents);
                        })
                    break
                case "POST" :
                    let body = [];
                    req.on('data', (chunk) => {
                        body.push(chunk);
                    }).on('end', () => {
                        body = Buffer.concat(body).toString();
                        // at this point, `body` has the entire request body stored in it as a string
                        fs.writeFile(__dirname + "/storage/todos.json", body)
                        res.writeHead(204);
                        res.end();
                    });
                    break
            }
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error: "Resource not found"}));
    }
};

http.createServer(requestListener).listen(9393);