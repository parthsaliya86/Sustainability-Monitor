var nodemailer = require('nodemailer');
var handlebars = require('handlebars');
var layouts = require('handlebars-layouts');

var fs = require('fs');

// const EMAIL = 'harikrushn.help@gmail.com';
// const PASSWORD = 'Hari 1837@help';
// const FROM_EMAIL = 'harikrushn.help@gmail.com';

// const EMAIL = 'sustainabilitymonitorreports@gmail.com';
// const PASSWORD = 'sustainability59@123';
const UserName = 'colin.stehr@ethereal.email';
const PASSWORD = 'kbptqMGdVwmujJBBCX';
const FROM_EMAIL = 'sustainabilitymonitorreports@gmail.com';


handlebars.registerHelper("multiply", function(a, b){
	return a * b;
});

handlebars.registerHelper(layouts(handlebars));
handlebars.registerPartial('layout', fs.readFileSync(path.join(__dirname,'templates/layout.hbs'),'utf8'));

handlebars.registerHelper('ifEquals', function(arg1, arg2) {
    return (arg1 == 'COD') ? 'Cash On Delivery' : 'Prepaid';
});

handlebars.registerHelper('if_eq', function(arg1, arg2) {
    return (arg1 == 'COD') ? '₹ 50.00' : '₹ 0.00';
});

handlebars.registerHelper('if_confirmed', function(arg1, arg2,options) {

	if(arg1 == arg2){
		return options.fn(this)
	}
    
});

handlebars.registerHelper('if_canceled', function(arg1, arg2,options) {

	if(arg1 == arg2){
		return options.fn(this)
	}
    
});

handlebars.registerHelper('if_approved', function(arg1, arg2,options) {

	if(arg1 == arg2){
		return options.fn(this)
	}
    
});

handlebars.registerHelper('if_shipped', function(arg1, arg2,options) {

	if(arg1 == arg2){
		return options.fn(this)
	}
    
});


handlebars.registerHelper('if_trackVerify',function(options){
	return options.fn(this)
})

handlebars.registerHelper('if_delivered', function(arg1, arg2,options) {

	if(arg1 == arg2){
		return options.fn(this)
	}
    
});


handlebars.registerHelper('if_packAmount', function(arg1, arg2,options) {

	var packageAmount = 0;

	for (let index = 0; index < arg1.length; index++) {
		const product = arg1[index];

		packageAmount = packageAmount + (product.product.price * product.quantity)
		
	}
	
	return `₹ ${packageAmount}.00`
    
});

handlebars.registerHelper('orderDiscount', function(arg1, arg2,payMethod) {

	var packageAmount = 0.00;

	if(payMethod == "COD"){
		return `₹ 0.00`
	}
	
	if(payMethod == "Prepaid"){

		for (let index = 0; index < arg1.length; index++) {
			const product = arg1[index];
	
			packageAmount = packageAmount + (product.product.price * product.quantity)
			
		}
	
		var total = packageAmount - arg2
		return `₹ ${total.toFixed(2)}`
	}
	
    
});



let transporter = nodemailer.createTransport({
	host: 'smtp.ethereal.email',
	port: 587,
	secure: false, // use TLS
	auth: {
		user: UserName,
		pass: PASSWORD
	}
});


module.exports = (options =>{
	new Promise((resolve,reject) =>{
		fs.readFile(path.join(__dirname,'./templates/' + options.template),{encoding:'utf-8'}, (err,html)=>{
	        if(err){
	        	reject(err);
	        }else{
	        	resolve(html);
	        }
	    });
	})
	.then(html =>{
		var template = handlebars.compile(html);
		// options.context['logo'] = CONFIG.BASE_URL + 'assets/images/logo.jpeg';
	    var htmlToSend = template(options.context);
	    var FROM = `<${FROM_EMAIL}>`;

        let mailOptions = {
			from: FROM,
			to: options.to,
			subject: options.subject,
			html: htmlToSend
		};

		transporter.sendMail(mailOptions, function (err, info) {
			console.log('Error',err,'Info----------------------------------',info)
		   if(err)
		    	logger.error(err)
		   else
		    	logger.info(info);
		});
	})
	.catch(err =>{
		logger.error(err);
	})
})