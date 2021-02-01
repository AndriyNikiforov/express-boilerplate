const User = require('./User');
const Token = require('./Token');

User.hasMany(Token, { as: 'tokens' });
Token.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'users',
});

module.exports = { User, Token };
