const { Favorite } = require('../DB_connection')

exports.deleteFav = async (req, res) => {

    const { id } = req.params

    try {
        
        if(!id){
            return res.status(401).json({error: "Falta id"})
        }

        await Favorite.destroy({
            where: {id}
        })

        const favChars = await Favorite.findAll()

        return res.status(200).json(favChars)

    } catch (error) {
        res.status(500).json({error: error.message})

    }

}