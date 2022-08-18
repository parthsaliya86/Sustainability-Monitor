const Schema = mongoose.Schema;

const Admin = new Schema({
    name : String,
    email : {type : String,unique : true},
    password : String,
    phone : String,
    token : {type : String,default : randomString.generate(50)},
    status : {type : Number,default : 1},
    created_at : {type : Number,default : new Date().getTime()},
    updated_at : {type : Number,default : new Date().getTime()},

})


module.exports = mongoose.model("Admin",Admin)