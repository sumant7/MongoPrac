const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();
const Animal = require('./models/animal');
//Animal here== animal collection in mongo

const db = config.get('mongoURL');

mongoose.connect(db, 
    { 
      useNewUrlParser: true, 
      useUnifiedTopology: true //since node version chosen 2.12 or later
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


//create
const newAnimal = new Animal({
  name: "Tiger",
  isEndangered: true
})


//saving
newAnimal.save()
.then(item=> console.log('Added'))
.catch(err=> console.log(err))


//reading or finding
Animal.find().sort({date: -1}).then(items=> console.log(items))


//update
Animal.findByIdAndUpdate({_id: '6242db838b5ae69a48c1ec81'},{
  isEndangered: false
}).then(item=> console.log("Updated"))


//delete
Animal.findOneAndDelete({ _id: '5d14cd34e8dbe65a6417915b' },{ isEndangered: false }
  )
  .then(console.log('Item deleted'));