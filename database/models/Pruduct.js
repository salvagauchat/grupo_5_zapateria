module.exports = function (sequelize, DataTypes) {
    let alias = "Product";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brands_id: {
            type: DataTypes.INTEGER
        },
        category_id:{
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING 
        },
        price: {
            type: DataTypes.NUMBER
        },
        discount:{
            type: DataTypes.INTEGER
        },
        size_id: {
            type: DataTypes.INTEGER
        },
        stock:{
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        },
    }

    let config = {
        tableName: "products",
        timestamps: false,
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.User, {
            as: "users",
            foreignKey: "user_id"
        }),
        Product.belongsTo(models.Brand, {
            as: "brands",
            foreignKey: "brand_id"
        }),
        Product.belongsToMany(models.Size, {
            as: "sizes",
            through: "product_size",
            foreignKey: "product_id",
            otherKey: "size_id"
        }),
        Product.belongsToMany(models.Cart, {
            as: "carts",
            through: "product_cart",
            foreignKey: "product_id",
            otherKey: "cart_id"
        }),
        Product.belongsToMany(models.Category, {
            as: "categories",
            through: "category_product",
            foreignKey: "product_id",
            otherKey: "category_id"
        })
    }


    return Product;

}