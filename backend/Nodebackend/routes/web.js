const express = require('express')
const Router = express.Router()

// Router.post('/payu/fail',PaymentsController._failTransaction)
Router.get('/admin',(req,res) =>{
    res.sendFile(path.join(APP_PATH,'build/admin/index.html'));
})
Router.get('*',(req,res) =>{
    res.sendFile(path.join(APP_PATH,'build/front/index.html'));
})



module.exports = Router;
