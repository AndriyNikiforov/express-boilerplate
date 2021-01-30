const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => res.json({
  message: 'Hello world',
}));

app.use((req, res) => {
  res.status(404).json({
    error: 404,
  });
});

app.listen(process.env.PORT, () => console.log('http://localhost:80/'));
