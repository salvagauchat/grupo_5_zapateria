
const { Op } = require("sequelize");
const db = require('../../database/models')

module.exports = {
    show: async(req,res) => {
        const products = await db.Product.findAll({
            raw: true,
            include: ['gender', 'brands'],
            nest: true
        })
        
        console.log(products)
        
        return res.json({
			total: products.length,
            products
			
		})
    }
}
