require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const mongodb = require('./app/database/connection');

const app = express();

app.set(mongodb);
app.set('trust proxy', true);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

const apiRoute = require('./app/routes/api-route');

app.use('/api', apiRoute);

app.use((err, req, res) => {
  res.status(500).send({ code: 'error', message: err.message });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running int http://localhost:${process.env.PORT}`);
});


module.exports = app;
