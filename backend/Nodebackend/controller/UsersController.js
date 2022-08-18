
// Contact us 

exports._contactUsUser = async(req,res)=>{
    try {
        req.body = __._form(req.body)

        // Validation 
        var required = ["name","email","message"]
        var validate = __._checkFields(req.body,required)

        if(validate !== true) throw new Error(validate.message)

        var data = {
            name : req.body.name,
            phone: (req.body.phone) ? req.body.phone : '',
            message : req.body.message,
            email : req.body.email,
            statusDate : {
                status : 'pending',
                date : new Date().getTime()
            }
        }
        var contactResponse = await Model._create(_Contactus,data)

        if(!contactResponse) throw new Error('Oops! You can\'t connect because you form is not a valid file.')
        
        // const mail = {
        //     to  : req.body.email,
        //     subject : 'Request revived by Harikrushn.com',
        //     template :'contactUs.hbs',
        //     context :{subject :'Request revived by Harikrushn.com',
        //     name: req.body.name,
        //     message : `Your request (${contactResponse._id}) has been received and is being reviewed by our support staff`
        // }}	

        // await _Mail(mail)
        __.res(res,`Hi ${req.body.name}, Your message has been received, and we will respond to you as soon as we can.`,200)          
  
    } catch (error) {
        __.res(res,error.message,500)
    }
}

// Update ticket

exports._updateTicket = async(req,res)=>{
    try {
        // Validation

      req.body = __._form(req.body);
  
      if(Object.keys(req.body).length == 0){
            __.res(res,'Oops! something went wrong,Please try again.',500)
            return false;
      }
  
      console.log("req.body Data ===>",req.body)

      const required = [
        "description",
        "status",
        "ticketId",
      ];

      const validator = __._checkFields(req.body, required);
  
      if (validator != true) throw new Error(validator.message);
  
      var condition = {
          _id : req.body.ticketId
      }

      var ticket = await Model._findOne(_Contactus,condition,{},false)

      if(!ticket) throw new Error('Oops! Ticket not found')

      ticket.status = req.body.status
      ticket.response = req.body.description
      
      var checkDate = false;

      for (let index = 0; index < ticket.statusDate.length; index++) {
          const date = ticket.statusDate[index];
          if(req.body.status == date.status){
            checkDate = true;
          }
      }

      if(!checkDate){
        ticket.statusDate.push({
            date : new Date().getTime(),
            status : req.body.status
        })
      }


        // Send Mail        _Mail(mail);

        const mail = {
            to  : ticket.email,
            subject : 'Request revived by HARIKRUSHN',
            template :'contactUs.hbs',
            context :{subject :'Request response by HARIKRUSHN',
            name: ticket.name,
            message : `Your request number(${ticket._id}) has been ${ticket.status}`,
            response : ticket.response
        }}	

        await _Mail(mail)
        

      ticket.save();

      __.res(res,ticket,200)


    } catch (error) {
        __.res(res,error.message,500)
    }
}
