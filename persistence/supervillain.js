const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const supervillainSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    superpower: {
        type: String,
        required: true
    },
    age: Number
});

const supervillain = model('supervillain', supervillainSchema);

module.exports = supervillain;

