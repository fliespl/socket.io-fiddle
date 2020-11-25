
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));

io.on('connection', socket => {
  console.log(`connect ${socket.id}`);

  socket.emit('hello', 1, '2', {
    hello: 'you'
  });

  socket.on('disconnect', () => {
    console.log(`disconnect ${socket.id}`);
  });
});

server.listen(port, () => console.log(`server listening on port ${port}`));
