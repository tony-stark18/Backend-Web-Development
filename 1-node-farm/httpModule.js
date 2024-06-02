const http = require('http');
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/overview") {
    res.end("This is the overview");
  } else if (pathName === "/product") {
    res.end("This is the Product");
  } else if (pathName === "/") {
    res.end("Hello From the Server!");
  } else {
    res.writeHead(404,{
        'Content-type':'text/html',
        'my-own-header':'hello World'
    });
    res.end("<h1>Page not found!<h1>"); // Send the "Page not found" response
  }
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to requests on port 8000')
});
