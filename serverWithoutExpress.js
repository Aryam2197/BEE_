const http = require("http");
const { request } = require("https");
const server = http.createServer((request,response));

let chunks = [];

request.on("data", (chunk) => {

    console.log('chunk :>> ' , chunk);
    chunks.push(chunk);
});

request.on("end", () => {

    console.log('request :>>' , request);
    const data = BUffer.concat(chunks);
    const querystring = data.toString();
    console.log('querystring :>>',parsedData);

    const dataobj = {};

    for(var pair of parsedData.entries()){
        dataobj[pair[0]] = pair[1];
    }

    response.end('request recieved ' + JSON.stringify());

});