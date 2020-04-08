const express = require('express');
const postRouter = require('./posts/postRouter');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use('/api/posts', postRouter);

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} Request to ${req.originalUrl}`);
}

module.exports = server;
