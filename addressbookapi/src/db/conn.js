const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/addressbook')
  .then(() => {
    console.log('Database Connection Successful.');
  })
  .catch((e) => {
    console.log('No Database Connection.');
  });
