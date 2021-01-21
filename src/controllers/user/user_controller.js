
class UserController {
    index = ( (req, res)=> {
        res.status(200).json({
            message:'Llego aca'
        })
    })

}

module.exports = new UserController