module.exports = function (sequelize, DataTypes) {
    let alias = "Size";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName:"sizes",
        timestamps: true,
    }

    let Size = sequelize.define(alias, cols, config);

    Size.associate = function (models) {
        Size.belongsToMany(models.Product, {
            as: "products",
            through: "productSize",
            foreignKey: "size_id",
            otherKey: "product_id"
        })
    }

    return Size;
}