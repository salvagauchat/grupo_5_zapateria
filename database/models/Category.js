module.exports = function (sequelize, DataTypes) {
    let alias = "Category";

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
        tableName: "categories",
        timestamps: false,
    }

    let Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.belongsToMany(models.Product, {
            as: "products",
            through: "category_product",
            foreignKey: "category_id",
            otherKey: "product_id"
        })
    }

    return Category;
}