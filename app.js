require('dotenv').config();

const Server = require('./models/server');

const server = new Server();

server.listen(process.env.PORT || 3001, '0.0.0.0', () => {
  console.log("Server is running.");
