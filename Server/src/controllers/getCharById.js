const axios = require('axios')

const URL = `https://rickandmortyapi.com/api/character/`

exports.getCharById = async (req, res) => {

    try {
        const { id } = req.params
        const { data } = await axios.get(`${URL}${id}`)
        

        if (data) {
            const char = data
            let character = {
                id: char.id,
                name: char.name,
                gender: char.gender,
                species: char.species,
                origin: char.origin,
                image: char.image,
                status: char.status
            }

            res.status(200).json(character)
        } else {
            res.status(404).json({message: "Not found"})
        }

    } catch (error) {
        res.status(500).json({message:error.message})
    }

}



// exports.getCharById = (req, res) => {

//     const { id } = req.params
//     axios.get(`${URL}${id}`)
//     .then((response) => {
//         if(response.data) {
//             const char = response.data

//             let character = {
//                 id: char?.id,
//                 name: char?.name,
//                 gender: char?.gender,
//                 species: char?.species,
//                 origin: char.origin,
//                 image: char?.image,
//                 tatus: char?.status
//             }

//             res.status(200).json(character)
//         } else {
//             res.status(404).json({message: "Not found"})
//         }
//     })
//     .catch((error) => {
//         res.status(500).json({message:error.message})
//     })

// }

// exports.getCharById = (res, id) => {

//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {

//         const char = response.data

//         return {
//             id,
//             name: char?.name,
//             gender: char?.gender,
//             species: char?.species,
//             origin: char.origin,
//             image: char?.image,
//             status: char?.status
//         }

//     })
//     .then((response) => {

//         res.writeHead(200, { "Content-type": "application/json "})
//         res.end(JSON.stringify(response))

//     })
//     .catch((reason) => {
//         res.writeHead(500, { "Content-type": "text/plain "})
//         res.end(reason.response.data.error)
//     })
     

// }


