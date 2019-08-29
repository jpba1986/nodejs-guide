const requestHandler = (req, res) => {
  const url = req.url;  
if (url === '/') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head></head>');
  res.write('<body>');
  res.write('<form action="/create-user" method="POST"><input type="text" name="user" > <button type="submit"> Add Me!</button>');    
  res.write('</form></body>');
  res.write('</html>');
  return res.end();
}
if (url === '/users' ) {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head></head>');
  res.write('<body>');
  res.write('<ul><li>User 1</li><li>User 2</li></ul>');    
  res.write('</body>');
  res.write('</html>');
  return res.end();
}

if (url === '/create-user' ) {
  const body = [];
  req.on('data', (chunk) => {
      body.push(chunk);        
  });
  req.on('end',() => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]); // username
  });
  res.statusCode = 302;
  res.setHeader('Location', '/');
  res.end();
}
}

module.exports = requestHandler;
