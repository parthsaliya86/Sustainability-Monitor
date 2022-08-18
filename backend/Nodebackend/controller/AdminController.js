exports._mailStudentHouse = async ()=>{
   try {

        const mail = {
            to: `wohnen@studentenwerkfrankfurt.de`,
            subject: 'My application number 464558 from 08.03.2021',
            template: 'studentHouseMail.html',                                
        }

        console.log(mail);

        var mailResponse = await _Mail(mail)
        console.log("Email has been sent to your primary email, Please check your inbox")

   } catch (error) {
       console.log(error);
   }
}