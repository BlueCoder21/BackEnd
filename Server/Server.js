//Importing http module
var http = require('http');
  
//Adding host and port
const host = 'localhost';
const port = 3000;

//Saying something to the server
const mayankListener = function(req, res){
 res.setHeader("Content-Type", "text/html");
 res.writeHead(200);
 res.send('<html><body><h1>Its a server,fools!!</h1></body></html>');
 res.end();
};

//Creating the server
var server = http.createServer(mayankListener);

//Making the server my pet(listen to me)
server.listen(port,host,function() {
 console.log(`Server is running on http://${host}/${port}`);
});