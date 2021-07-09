const cors = require('cors');
const express = require('express');
const session = require('express-session');
const passport = require('./passport');

const app = express();
const { SECRET_KEY } = process.env;
const sessionConfig = {
  secret: SECRET_KEY,
  cookie: {},
  resave: false,
  saveUninitialized: false,
};

app.use(cors());
app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

module.exports = app;
