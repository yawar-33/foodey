const express = require("express");
const router = express();
router.get('/', (req, res) => {
    res.status(200).send({
        data: 'Hello Foodey! I am running',
    })
})
