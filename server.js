const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.end();
});

const port = 7080;

server.listen(port, (err) => {
    if (err) {
        console.log(err);

        return;
    }
});