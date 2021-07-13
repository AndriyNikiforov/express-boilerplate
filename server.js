const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const { log } = require('console');

const Routers = require('./src/routers');
const swaggerSpec = require('./config/swagger');
const { App, passport } = require('./config/env');

const { NODE_ENV } = process.env;
let { NODE_PORT } = process.env;
NODE_PORT = (NODE_ENV === 'test') ? 3007 : NODE_PORT;

dotenv.config();

App.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

App.use('/api/', Routers);
App.get('/', passport.authenticate(), (req, res) => res.json({
  message: 'Hello world',
}));

App.use((req, res) => {
  res.status(404).json({
    error: 404,
  });
});

App.listen(NODE_PORT, () => log(`http://localhost:${NODE_PORT}/`));
