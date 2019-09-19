const mongoose = require('mongoose');

const { Schema } = mongoose;
const healthinfoSchema = new Schema({
    tel: {
        type: String,
        required: true,
    },
    memo: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('healthinfo', healthinfoSchema);