// Importing modules
const express = require('express');
const Person = require('./models/person');
const server = express();
require('./db/conn');
const PORT = process.env.PORT || 9000;

server.use(express.json());

// create a new addressbook record
server.post('/adduser', async (req, res) => {
  try {
    const user = new Person(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
    console.log('====================================');
    console.log('   Added the new Record    ');
    console.log('Check Below :');
    console.log(req.body);
    console.log('====================================');
  } catch (e) {
    res.status(400).send(e);
    console.log('====================================');
    console.log('Record Not Added.');
    console.log('====================================');
  }
});

// read data of all address records
server.get('/getaddresses', async (req, res) => {
  try {
    const peopleData = await Person.find();
    res.send(peopleData);
    console.log('====================================');
    console.log('     All Records in Address Book :       ');
    console.log('Check Below :');
    console.log(peopleData);
    console.log('====================================');
  } catch (e) {
    res.send(e);
    console.log('====================================');
    console.log('No Records Available');
    console.log('====================================');
  }
});

// read data of address record by name
server.get('/getaddressbyphone/:phone', async (req, res) => {
  try {
    const phone = req.params.phone;
    const personData = await Person.find({
      phone: phone,
    });
    if (!personData) {
      console.log('====================================');
      console.log(
        `There is no person with phone number ${phone} in the address book`
      );
      console.log('====================================');
      return res.status(404).send();
    } else {
      res.send(personData);
      console.log('====================================');
      console.log(`The details of person with phone number ${phone} are: `);
      console.log(personData);
      console.log('====================================');
    }
  } catch (e) {
    res.send(e);
  }
});

// delete a record

// staring the server
server.listen(PORT, () => {
  console.log(`Connection is live at PORT:${PORT}`);
});
