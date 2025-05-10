const http = require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("hello we are from home page");
        return res.end();
    }
    if(req.url==='/about'){
       return res.end("we are from about page"); 
    }
    res.end(`
        <h1>OOPS! response not found </h1>
        <a href='/'> back to home page</a>
        `);
})

server.listen(3400);