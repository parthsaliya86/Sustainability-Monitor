const express = require('express')
const Router = express.Router()

Router.get('*',(req,res) =>{
    res.sendFile(path.join(APP_PATH,'build/admin/index.html'));
})

// AdminLogin
// Router.post('/login/admin',AdminController._adminLogin)
// Router.post('/checkAuth',_isAuthAdmin,AdminController._checkAuthAdmin)


async function _isAuthAdmin(req,res,next){
    try {
        var validate =  await __._isAuthAdmin(req);
        if(!validate) throw new Error('UnAuthorized')
        next()
    } catch (error) {
        logger.error(error)
        __.res(res,error.message,401)    
    }
    
}

module.exports = Router;
