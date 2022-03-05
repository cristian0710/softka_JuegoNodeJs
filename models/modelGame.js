const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelGameSchema = new Schema({
    name: {
        type: String,
        trim: true, //omitir espacios del teclado
        required: [true, 'Debe colocar nombre del jugador']
    },
    num: {
        type: String,
        trim: true,
        required: [true, 'Debe ingresar un numero']
    }
});

module.exports = Game = mongoose.model('Game', modelGameSchema);