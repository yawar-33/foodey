const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/connection.js");
const userRoutes = require("./routes/userRoutes")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
connectDB();
app.get('/', (req, res) => {
    res.status(200).send({
        data: 'Hello Foodey! I am running',
    })
})
app.use('/api', userRoutes)

const PORT = 5000;
app.listen(PORT, () => { console.log(`Server running at ${PORT}`); })