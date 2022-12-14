require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes.js')(app);

require('./cron.js');

app.get('/', (req, res) => res.send('Testing...'));

app.listen(3000, () => console.log('listening on 3000'));

module.exports = app;
