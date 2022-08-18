
var bcrypt = require('bcryptjs');

module.exports = {
	_checkFields : function(body,required,skip=[]){


		// for (var i = 0; i < required.length; i++) {

		// 	if (Object.keys(body).indexOf(required[i]) == -1) {
		// 		return {
		// 			is_valid: false,
		// 			message: required[i].split('_').join(' ') + ' is required.'
		// 		};
		// 	}

		// }
		
		for(var i=0;i<Object.keys(body).length;i++){
			var field = Object.keys(body)[i];

			if(body[field].toString().trim() == "" && field !== 'image' &&
			required.indexOf(field) !== -1){
				return {
					is_valid : false,
					message : field + ' is required.'
				};
			}

			if(field == 'email' && required.indexOf(field) !== -1 && !this._validateEmail(body[field].toString().trim())){
				return {
					is_valid : false,
					message : 'Please enter valid email address.'
				};
			}
		}
		
		return true;
	},
	res : function(res,message,status,is_api = true){
		if(status !== 200){
			if (message == 'default')
				message = 'Oops! something went wrong,Please try again.';
			var response = {
				status : 0,
				code : status,
				data : message
			}
			if(is_api){
				res.send(JSON.stringify(response)).status(200);
			} else {
				res.status(status).send(message);
			}
			return;
		}
		var response = {
			status : 1,
			code : status,
			data : message	
		}
		if(is_api){
			res.send(JSON.stringify(response)).status(200);
		} else {
			res.send(message).status(status);
		}
		return;
	},
	_hashPass : function(pass){
		return bcrypt.hashSync(pass, 10);
	},
	_comparPass : function(pass,hash){
		return bcrypt.compareSync(pass,hash);
	},
	_form : function(body){
		Object.keys(body).forEach(key =>{
			if(typeof body[key] === 'string'){
				body[key] = body[key].replace(/<[^>]*>/g, '');
			}
		});
		return body;
	},
	_validateEmail : function(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	},
}