const mongoose = require('mongoose');

const Test = mongoose.model('Test', {
    title:{
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
})

module.exports = Test;