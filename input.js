// Stores the active TCP connection object.
let connection;

// Set up User Interface
// So we can handle user input via stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 'd') {
    connection.write('Move: right');
  }
};

module.exports = { setupInput };