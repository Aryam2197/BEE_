const http = require('https');
const url = require('url');

const server = http.createServer((req,res) => {
    const parseUrl1 = url.parse(req.url,true);
    const queryParams = parsedUrl1.query;

    res.writeHead(200,{ 'Content-Type' : 'text/html'});

    if(req.url.startsWith('/greet')){
        const name = queryParams.name || 'Guest';
        res.end(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <style>
                    body{
                        text-align:center;
                        margin-top:50px;
                    }
                    .greeting{
                        color:red;
                    }
                </style>
                
            </head>
            <body>
                <div class="greeting">Welcome to ${name} BEE @Chitkara</div>
            </body>
            </html>`
        );

    }
    else{
        res.end('Invalid url or param given in the route\n');
    }
});

const port = 3030;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});


// http://localhost:3030/greet?name=Aryam