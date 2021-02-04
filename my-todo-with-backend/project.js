const http = require('http');
const fs = require('fs').promises;


// const requestListener = function (req, res) {
//     fs.readFile(__dirname + "/index.html")
//         .then(contents => {
//             res.setHeader("Content-Type", "text/html");
//             res.writeHead(200);
//             res.end(contents);
//         })
// };

const requestListener = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("My first server!");
};

http.createServer(requestListener).listen(9393);