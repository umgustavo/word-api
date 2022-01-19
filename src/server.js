require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const log = require('gulog');

log.setup({ prefix: '(word-api)' });

const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
// app.use(morgan('dev')); // Log requests
app.use('/', routes);

app.listen(PORT, () => {
    log.info(`Listening on port ${PORT}.`);
});
