const mongoose = require("mongoose");

const artModel = new mongoose.Schema({ // CRIANDO UM MODEL

    title: String,
    autor: String,
    body: String,
    date: {type: Date, dafault: Date.now},
    special: Boolean,
    resume: {
        content: String,
        autor: String
    }

})

module.exports = artModel; // EXPORTANDO O MODEL PARA O INDEX