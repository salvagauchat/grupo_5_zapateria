module.exports = function (sequelize, DataTypes) {
    let alias = "Cart";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        product_id: {
            type: DataTypes.STRING
        },
        quantity:{
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName: "carts",
        timestamps: false,
    }

    let Cart = sequelize.define(alias, cols, config);

    Cart.associate = function (models) {
        Cart.belongsToMany(models.Product, {
            as: "products",
            through: "product_cart",
            foreignKey: "cart_id",
            otherKey: "product_id"
        }),
        Cart.belongsTo(models.User, {
            as: "users",
            foreignKey: "user_id"
        })
    }

    return Cart;
}