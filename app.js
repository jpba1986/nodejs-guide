const http = require('http');

const server = http.createServer((req, res)=> {
    console.log(req.url, req.method, req.headers);

    const url = req.url;

    if (url ==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head></head>');
        res.write('<body>');
        res.write('<p>Im root</p>');
        res.write('<body>');
        res.write('</html>');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head></head>');
    res.write('<body>');
    res.write('<p>https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers</p>');
    res.write('<body>');
    res.write('</html>');
    res.end();

});


server.listen(3000);
