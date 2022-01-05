const nodemailer = require("nodemailer");
//const temp=require("../../templates/mail.html")


const Mail = async (req,res)=> {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  

  console.log(req.body)
  
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    //host: "smtp.ethereal.email",
    host: 'smtp.gmail.com', 
    service:'gmail',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'greyspades99@gmail.com',
      pass: 'Vermilion9#', 
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('All works fine, congratz!');
    }
  });

  // send mail with defined transport object
  transporter.sendMail({
    from: req.body.data.sender, // sender address
    //to: 'greyspades99@gmail.com', // list of receivers
    to:`ujugrace86@gmail.com`,
    subject: req.body.data.email, // Subject line
    text: req.body.data.message, // plain text body
    
  })
  .then((item)=>{
    console.log('mailed')
    console.log(item)
    res.send('SUCCESS')
  })
  .catch((err)=>{
    console.log(err)
    console.log('not sent')
  })
  //console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export default Mail