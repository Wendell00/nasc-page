import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "naorespondanascseguranca@gmail.com",
      pass: "nimwlwbvhhqnhsww"
   }
});

const mailOptions = {
   from: "naorespondanascseguranca@gmail.com",
   to: "wendellborges2003@gmail.com",
   subject: "Nodemailer Test",
   html: "Test <button>sending</button> Gmail using Node JS"
};

const botao = document.querySelector('.botao')

botao.addEventListener('click', (e)=>{
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
       console.log(error);
    }else{
       console.log("Email sent: " + info.response);
    }
 });
})