const User = require("../models/User.js")
const { sign } = require('jsonwebtoken')
const isNull = require("../utilities/NullChecking.js")

module.exports = {
    async createUser(req, res) {
        const { firstName, lastName, username, email, hash_password, role, contactNumber, pofilePicture, location } = req.body
        try {
            const userCollection = await User.create({
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                location: location,
                hash_password: hash_password,
                contactNumber: contactNumber,
                pofilePicture: pofilePicture,
                // role: role,
            })

            if (userCollection) {
                res.status(200).send({ userCollection: userCollection })
            } else {
                res.status(404).send('Something Went Wrong')
            }
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },

    async loginUser(req, res) {
        const { email, hash_password } = req.body;
        console.log();
        try {
            if (isNull(email) || isNull(hash_password)) {
                res.status(400).send({ message: 'Please Enter Email or Password' });
                return;
            }
            const userCollection = await User.findOne({ email: email })
            if (!isNull(userCollection)) {
                if (userCollection.hash_password === hash_password) {
                    const jsontoken = sign({ userCollection: userCollection }, "qwe1234", {
                        expiresIn: "24h"
                    });
                    let userInfo = { ...userCollection._doc }
                    res.status(200).send({
                        token: jsontoken,
                        userInfo: userInfo
                    })
                } else {
                    res.status(400).send({ message: 'Please Enter Valid Password' })
                }
            } else {
                res.status(400).send({ message: 'User Not Found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }
}