const http = require('http');
const program = (require('commander'))
    .description('Redirects all HTTP traffic locally')
    .option('-r, --destinationUrl <path>', 'the url that will be redirected')
    .option('-p, --port <port>, "specify the port of the url", Number, 3000')
    .parse(process.argv);

var server = http.createServer(function (req, res) {
    res.writeHead(302, {'Location': program.destinationUrl + req.url});
    res.end;
    console.log('Starting server on port: ' + program.port);
    console.log('Traffic redirected to ' + program.destinationUrl)
});

server.listen(program.port);
