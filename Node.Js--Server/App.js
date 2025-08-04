const http = require('http');
const fs = require('fs');
const port = 3000;
const path = require('path');
const { error, log } = require('console');

const requestHandler = (req, res) => {

    let filename = ' ';

    console.log(req.url);

    switch (req.url) {

        case '/':
            filename = 'Home.html';
            break;

        case '/about':
            filename = 'About.html';
            break;

        default:
            filename = '404.html';

    }
    fs.readFile(path.join(__dirname, 'Pages', filename), 'utf8', (err, data) => {

        if (err) {
            console.log(err);
            return;
        }
        res.end(data);

    })
}

const server = http.createServer(requestHandler);

server.listen(port, (error) => {
    
    if (error) {
        console.error(error);
        return false;
    }
    
    console.log(' This is a Start Port : ', port);
})