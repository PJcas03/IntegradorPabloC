const users = require("../utils/users")

exports.login = (req, res) => {

    const { email, password } = req.query

    let user = users.find((us) => us.email === email && us.password === password)


    if(user) {
        res.status(200).json({access:true})
    } else {
        res.status(200).json({access:false})
    }


}