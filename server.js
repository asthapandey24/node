const http = require('http');

const server = http.createServer((req,res)=>{
   if(req==true){
    console.log('Astha');
   }
})
server.listen(4000);