
const { Op } = require("sequelize");
const db = require('../../database/models')

module.exports = {
    show: async(req,res) => {
        let brand = await db.Brand.findAll({
            raw: true,
            nest: true
        })
    

        return res.json({
			brand
			
		})
    },

    
    
}