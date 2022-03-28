const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AnimalSchema = new Schema({
    name: {
        type: String, required: true
    },
    isEndangered:{
        type: Boolean, default: false
    },
    entrydate: {
        type: Date, default: Date.now()
    }
})

let item= mongoose.model('animal', AnimalSchema)
module.exports = item