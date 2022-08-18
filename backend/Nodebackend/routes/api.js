const express = require('express')
const Router = express.Router()

// AdminLogin
Router.post('/contactUs/user', UsersController._contactUsUser)

async function _publicAccess(req,res,next){
    try {
        var validate =  await __.verifyToken(req);
        next()
    } catch (error) {
        next()
    }
    
}

module.exports = Router;
