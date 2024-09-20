const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
        name: {type: String, required: true},
        category: {type: String, required: true},
        imageUrl: {type: String},
    },
    {timestamps: true, versionKey: false}
);

module.exports = mongoose.model('animals', animalSchema);
