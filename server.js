const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();

const db = config.get('mongoURL');

mongoose.connect(db, 
    { 
      useNewUrlParser: true, 
      useUnifiedTopology: true //since node version chosen 2.12 or later
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));