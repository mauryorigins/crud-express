// --------------------------------------IMPORTS------------------------------------
// ---Dependencies
import express from 'express';
// ---Middlewares
import helmet from 'helmet';
import cors from 'cors';
// ---Others
import startLogs from '#Config/startLogs';
// ---Routes
import logearse from '#Routes/loginMock';
// -----------------------------------CONFIG-------------------------------

const app = express();
const enviroment = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 4000;

startLogs(enviroment); // Just and example of posible use of configs
// -----------------------------------MIDDLEWARES-------------------------------
app.use(express.json()); // Needed to read req.body
app.use(helmet()); // For security
app.use(cors()); // For security
// -----------------------------------ROUTES-------------------------------
app.use('/api/loginMock/', logearse);
// -----------------------------------SSL-------------------------------
const http = require('http');

// const trySSL = process.env.USE_SSL || false; // Set use of https from enviroment

const server = http;
const options = {}; // Get ssl certs if https true
// -----------------------------------SERVER-------------------------------
server
  .createServer(options, app)
  .listen(port, () => {
    console.log(`https: ${false}, listening to port ${port}...`);
  });
