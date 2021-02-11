const net = require('net');
const { IP, PORT, NAME } = require('./constants');

// Establishes connection with game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: ' + NAME);
    // conn.write('Move: up');
  });
  conn.on('data', () => {
    console.log('you ded cuz you idled');
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  return conn;
};

module.exports = { connect };