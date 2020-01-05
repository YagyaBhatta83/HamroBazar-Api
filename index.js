const express = require('express');
const mongoose = require("mongoose");
const userRouter = require('./routes/users');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true }));


const auth = require('./auth');



mongoose.connect('mongodb://localhost:27017/hamrobazar', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then((db) => {
        console.log("Successfully connected to MongodB server");
    }, (err) => console.log(err));

    app.use('/users', userRouter);





    
    app.listen(3000, () => {
        console.log(`App is running at localhost:3000`);
    });

   