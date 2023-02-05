
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        max: 30,
    },
    lastName: {
        type: String,
        required: true,
        max: 30,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    hash_password: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user", "admin", "super-admin"],
        default: "user",
    },
    contactNumber: { type: String },
    pofilePicture: { type: String },
},
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);