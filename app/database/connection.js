const mongoose = require('mongoose');
const { mongodbUri } = require('./config');

const mongoOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };

mongoose.connect(
  mongodbUri,
  mongoOptions,
  (err) => {
    if (err) throw err;
    console.log('Mongodb running');
  }
);

mongoose.connection.on('disconnected', () => {
  console.log('MONGO DISCONNECTED');
  if (mongoose.connection.readyState === 0) {
    mongoose.connection.readyState = 2;
    setTimeout(() => {
      mongoose.connect(mongodbUri, mongoOptions);
    }, 1000);
  }
});

module.exports = {
  mongoose
};
