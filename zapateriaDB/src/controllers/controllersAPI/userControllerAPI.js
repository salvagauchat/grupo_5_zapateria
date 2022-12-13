const db = require("../../database/models");

const { Op } = require("sequelize");


module.exports = {
    show: async(req,res) => {
        const users = await db.User.findAll()
        
        console.log(users)
        
        return res.json({
			total: users.length,
            users
		})
    }
}
