module.exports = (sequelize, DataTypes) => {
    const alias = 'User';

    const cols = {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }

    const config = {
        timestamps: false,
        tableName: 'users'
    }

    const user = sequelize.define(alias, cols, config);

    return user;
}