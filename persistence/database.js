const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/newdb', {useNewUrlParser: true }, (err) => {
    if (err) {
        console.log("Error!!!!");
    } else {
        console.log("success");
    }
})

module.exports = mongoose;