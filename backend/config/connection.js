const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017'

const connectDB = async () => {
    await mongoose.connect(connectionString, (err,res) => {
        if (err) {
            console.log("Have Err in Connection!!!!", err)
        } else {
            console.log("Moongo is connected!:P");

        }
    });
}
module.exports = connectDB;
