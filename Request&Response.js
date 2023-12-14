const http = require('http');

const server = http.createServer((req,res) => {

    //example1 -> send a basic response for the rooth path '/'
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type' : 'text/plain'});
        res.write('This is "/" -> root path of our url');
        res.end();
    }
    //example2 -> html response
    else if(req.url === '/html'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<html><body>This is html response coming from "/html" url</body></html>');
        res.end();

        //event listener
        res.on('finish', () => {
            console.log(`Requested URL: ${req.url}`);
            console.log(`Requested HTTP Status Code: ${req.statusCode}`);
        })
    }
    

});

// port number 
const port = 4000;

// start the server
server.listen(port, () => {
    console.log(`Server is Running Successfully on port ${port}`);
});

//   http://localhost:4000/
//   http://localhost:4000/html 
//   http://localhost:4000/redirect