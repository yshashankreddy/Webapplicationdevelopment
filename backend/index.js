const http = require("http");
const path = require("path");
const fs = require("fs");
const cors = require('cors')

const server = http.createServer((req, res) => {
    
    /*

        

        we can Navigate to different pages via different requests. 
        if / then goto index.html
        if /api then laod the JSON file  



    */
   //allow CORS policy
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    
    
    if (req.url === '/') {
        // read public.html file from public folder
        fs.readFile(path.join(__dirname, 'public', 'index.html'),
                    (err, content) => {
                                    
                                    if (err) throw err;
                                    res.writeHead(200, { 'Content-Type': 'text/html' });
                                    res.end(content);
                        }
              );
     }

    
    else if (req.url==='/api')
    {
        fs.readFile(
            path.join(__dirname, 'public', 'db.json'),'utf-8',
                    (err, content) => {
                                    
                                    if (err) throw err;
                                    // Please note the content-type here is application/json
                                    res.writeHead(200, { 'Content-Type': 'application/json' });
                                    res.end(content);
                        }
              );
    }

    else if(req.url == "/mypic.jpg") {
        fs.readFile(path.join(__dirname, 'public', 'mypic.jpg'), function (err, content) {
            if (err) throw err;
              res.end(content);
            });
    } 

    else{
        res.end("<h1> 404 nothing is here</h1>");
    }


});

const PORT= process.env.PORT || 5958;

server.listen(PORT,()=> console.log(`Great our server is running on port ${PORT} `));