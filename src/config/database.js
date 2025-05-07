const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://namastedev:fG2rMoecg5aF9tgK@namastenode.ycytt11.mongodb.net/devTinder");
}

module.exports = connectDB;