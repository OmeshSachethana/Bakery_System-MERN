const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require("dotenv").config();



const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json())
app.use(express.json());

const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const connection = mongoose.connection

connection.once("open", () => {
  console.log('MongoDB Connection Success!!!')
})


const deliveriesRouter = require('./routes/deliveries');


app.use('/deliveries', deliveriesRouter);



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})


