export default function handler(req, res) {  
    if(req.method === 'POST') {
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY); //SendGridのAPIキー
       
      const msg = {
        to: req.body.email,
        from: 'kazuhideizawa@gmail.com',
        subject: 'Thank you for your message',
        text: 'I received the email. Back you soon!' + req.body.message,
        html: 'I received the email. Back you soon!' + req.body.message,
      };
   
      (async () => {
        try {
          await sgMail.send(msg);
        } catch (error) {
          console.error(error);
          if (error.response) {
            console.error(error.response.body)
          }
        }
      })();
    }
   
    res.status(200)
  }