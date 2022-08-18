const Schema = mongoose.Schema;

const Contactus = new Schema({

    name : {type : String,default : ''},
    email : {type : String,default : ''},
    phone : {type : String,default : ''},
    message : String,
    response : String,
    
    status : {
        type : String,
        
        enum : [
                'pending',
                'canceled',
                'solved',
        ],

        default : 'pending'
    },

    statusDate : [{
        status : {type : String,default : 'pending'},
        date : {type : Number, default : new Date().getTime()}
    }],

    created_at : {type : Number,default : new Date().getTime()},
    updated_at : {type : Number,default : new Date().getTime()}

})

module.exports = mongoose.model('Contactus',Contactus)