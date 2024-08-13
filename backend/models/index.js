const dotenv = require('dotenv');
dotenv.config();

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URI, {
    dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./User')(sequelize, DataTypes);
db.Conversation = require('./Conversation')(sequelize, DataTypes);
db.Message = require('./Message')(sequelize, DataTypes);
db.Response = require('./Response')(sequelize, DataTypes);

// Define associations
db.User.hasMany(db.Conversation, { foreignKey: 'userId' });
db.Conversation.belongsTo(db.User, { foreignKey: 'userId' });
db.Conversation.hasMany(db.Message, { foreignKey: 'conversationId' });
db.Message.belongsTo(db.Conversation, { foreignKey: 'conversationId' });
db.Message.hasOne(db.Response, { foreignKey: 'messageId' });
db.Response.belongsTo(db.Message, { foreignKey: 'messageId' });

module.exports = db;
