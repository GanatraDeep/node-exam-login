require('dotenv').config();
const express = require('express');
const session = require('express-session');

const authController = require('./controllers/auth.controller');
const adminController = require('./controllers/admin.controller');
const userController = require('./controllers/user.controller');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: process.env.SESSIONSECRET,
    saveUninitialized: false,
    resave: false
}));

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(authController);
app.use('/admin', adminController);
app.use('/user', userController);


app.listen(5000);