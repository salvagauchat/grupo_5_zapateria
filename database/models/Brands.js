module.exports = function (sequelize, DataTypes) {
    let alias = "Brand";

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
        tableName: "brands",
        timestamps: false,
    }

    let Brand = sequelize.define(alias, cols, config);

    Brand.associate = function (models) {
        Brand.hasMany(models.Product, {
            as: "products",
            foreignKey: "brand_id"
        })
    }

    return Brand;
}