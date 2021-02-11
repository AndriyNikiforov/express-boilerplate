const User = require('./User');
const Token = require('./Token');

User.hasMany(Token, { as: 'tokens', foreignKey: 'user_id' });

module.exports = { User, Token };
