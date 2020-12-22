
const socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', () => {
  console.log(`connect ${socket.id}`);
});

socket.on('disconnect', () => {
  console.log(`disconnect ${socket.id}`);
});

socket.on('hello', (a, b, c) => {
  console.log(a, b, c);
});

// FAILING TO EMIT
socket.on('connect_error', () => {
  console.log('connect_error -> not working');
});

socket.io.on('error', () => {
  console.log('io error -> working');
});