/*
Create a http or https server which is listen to 3000 port.
The home page “/” which displays an html page with one input to enter any text message
User enter some message, then click “Submit” button
The user’s inputs are stored in a local file on the server side.
User will be redirect to home page after saving successfully.
*/

const fs = require('fs')
const http = require('http');
http((req,res)=>{
      const url = req.url;
      const method = req.method;
      
      if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/messsage" method="POST">Enter Message: <input name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); // "retrun" here exits the function execution, otherwise continue.
    }

    if (url === '/messsage' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const chunkStreamBody = Buffer.concat(body).toString();
            console.log(chunkStreamBody);
            fs.writeFileSync('message.txt', chunkStreamBody.split('=')[1]);
        });

        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hellow from Node.js</h1></body>');
    res.write('</html>');
    res.end();
      
    
}).listen(3000,()=>console.log('listening to 3000 '))