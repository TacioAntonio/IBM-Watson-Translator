require('dotenv').config();
const { APP_PORT } = require('./config/configurations');
const { success } = require('./util/messages');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = APP_PORT;
const connectionMessage = _ => { success(`[online] server online at http://localhost:${port}`); };
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router');

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(port, connectionMessage);




















