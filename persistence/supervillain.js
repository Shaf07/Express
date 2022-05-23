const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const supervillainSchema = new Schema({
    name: String,
    superpower: String
})