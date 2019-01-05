const express = require('express');
const http = require('http');
const path = require('path');
const _ = require('underscore');

// HTTP
const port = 3000;
const app = express();
const server = http.createServer(app);

app.use(express.static('dist'));
app.use('/public', express.static(path.join(__dirname, '..', '..', 'public')));


server.listen(port, () => {
  console.log(`Server is ran on : http://localhost:${port}`);
});
