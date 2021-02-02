const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const Routers = require('./src/routers');

const app = express();

dotenv.config();

const { NODE_PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use('/api/', Routers);

app.get('/', (req, res) => res.json({
  message: 'Hello world',
}));

app.use((req, res) => {
  res.status(404).json({
    error: 404,
  });
});

app.listen(NODE_PORT, () => console.log(`http://localhost:${NODE_PORT}/`));

module.exports = app;
