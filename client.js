const net = require('net');

// Establishes connection with game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: KJD');
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