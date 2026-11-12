const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const files={'/':'index.html','/index.html':'index.html','/style.css':'style.css','/app.js':'app.js'};
const server=http.createServer((req,res)=>{const name=files[new URL(req.url,'http://localhost').pathname];if(!name){res.writeHead(404);return res.end('Not found')}fs.readFile(path.join(__dirname,name),(error,data)=>{res.writeHead(error?500:200,{'Content-Type':name.endsWith('.css')?'text/css; charset=utf-8':name.endsWith('.js')?'text/javascript; charset=utf-8':'text/html; charset=utf-8','Cache-Control':'no-cache'});res.end(error?'Unable to load file':data)})});
server.on('error',error=>{console.error(error.code==='EADDRINUSE'?'Port 3000 is already in use. Stop the previous local server first.':error.message);process.exitCode=1});
server.listen(3000,'127.0.0.1',()=>console.log('Open http://127.0.0.1:3000'));
