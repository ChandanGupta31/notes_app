const mongoose = require('mongoose');

const connect = () => {
    const url = "mongodb+srv://chandan:Chandan%4031@cluster0.8ntkxd2.mongodb.net/notesdb";
    mongoose.connect(url);
    mongoose.connection.on('connected', () => {
        console.log('Connected')
    })
    mongoose.connection.on('disconnected', () => {
        console.log('Disconnected')
    })
    mongoose.connection.on('error', () => {
        console.log('error')
    })
}

module.exports = connect;