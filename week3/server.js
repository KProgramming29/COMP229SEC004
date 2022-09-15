const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer ( (req, res) => {

    let filepath = __dirname + '/public/index.html';
    console.log(req.url);

    switch(req.url) {
        case '/aboutus': filepath = __dirname + '/public/about.html';
        break;
        default : filepath = _dirname + '/public/index.html';
        break;
    }

    fs. readFile(filepath, (err,data) => {
        res.statusCode = 200;
    res.setHeader('Contet-type' , 'text/html');
    res.end('hi');})
})


    

    server.listen(port, hostname, () => {
        console.log('server is running at http://${hostname}:${port}');
    })