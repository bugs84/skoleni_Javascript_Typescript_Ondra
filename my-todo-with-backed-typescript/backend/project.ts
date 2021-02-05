import * as http from "http"
import {IncomingMessage, ServerResponse} from "http";

import { promises as fs } from 'fs';
var path = require('path');

const requestListener = function (req: IncomingMessage, res: ServerResponse) {
    console.log("DIRNAME:")
    console.log(path.join(__dirname, "../frontend/index.html"))

    switch (req.url) {
        case "/":
        case "/index.html":
            fs.readFile(path.join(__dirname, "../frontend/index.html"))
                .then(contents => {
                    res.setHeader("Content-Type", "text/html");
                    res.writeHead(200);
                    res.end(contents);
                })
            break
        case "/index.js":
            fs.readFile(path.join(__dirname, "../frontend/index.js"))
                .then(contents => {
                    res.setHeader("Content-Type", "text/javascript");
                    res.writeHead(200);
                    res.end(contents);
                })
            break
        case "/todos":
            switch (req.method) {
                case "GET" :
                    fs.readFile(path.join(__dirname, "storage/todos.json"))
                        .then(contents => {
                            res.setHeader("Content-Type", "application/json");
                            res.writeHead(200);
                            res.end(contents);
                        })
                    break
                case "POST" :
                    let bodyBytes:any = [];
                    req.on('data', (chunk) => {
                        bodyBytes.push(chunk);
                    }).on('end', () => {
                        const body = Buffer.concat(bodyBytes).toString();
                        // at this point, `body` has the entire request body stored in it as a string
                        fs.writeFile(path.join(__dirname, "storage/todos.json"), body)
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