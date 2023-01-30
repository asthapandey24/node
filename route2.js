
const fs = require('fs');

const requestHandler = (req, res)=>{
   const url = req.url;
   const method = req.method;
if(url === '/'){
    
   res.write('<html>');
   res.write('<head><title>Enter Message</title><head>');
   res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
   res.write('</html>');
   return  res.end();
   
 }
   if(url === '/message' && method === 'POST'){
   const body = [];
   req.on('data', (chunk) =>{
       console.log(chunk);
      body.push(chunk);
   });

      return req.on('end', () =>{

       const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt' , message ,(err) =>{
   // fs.writeFileSync('message.txt' , 'DUMMY');
    res.statusCode = 302;
    res.setHeader("Location","/");
    return res.end();
      });
       });
    }
         res.setHeader('Content-Type', 'text/html');
         res.write('<html>');
         res.write('<head><title>My first page</title><head>');
         res.write('<body><h1> Welcome to my nodejs project</h1></body>');
         res.write('</html>');
         res.end();
   };
  // module.exports = requestHandler; // (we can add here different objects key value pair but for this we use request)
   // module.exports = {
   //    handler: requestHandler,
   //    some_text : 'Some hard coded text'
   // }

    // module.exports.handler = requestHandler;
    // module.exports.some_text = 'some hard coded text';
       
     exports.handler = requestHandler;
     exports.some_text = 'some hard coded text';
