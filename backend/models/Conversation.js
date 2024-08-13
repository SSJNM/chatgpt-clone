const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const Conversation = sequelize.define('Conversation', {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        startTime: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        endTime: {
            type: DataTypes.DATE
        }
    });
    return Conversation;
};
