const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')

console.log(process.env.SENDGRID_API_KEY)
// fetch("https://api.twilio.com/2010-04-01/Accounts/AC21613e24f57fc71ea268a3f8213b31f6/Messages.json", {
//   method: "GET",
//   mode: "no-cors",
//   credentials: {
//     'System' : 'Management',
//     'Automation' : ''
//   },
//   //Accept: "application/json",
//   //Authorization: "Basic TXViYXJha0licmFoaW0gKHB1YmxpYyk6amw4LWEzVmJsX25scXl6cVJwU3BZVkFKUW9qSmM0OTY=",
//   headers: {
//     "X-Auth-Token": "jl8-a3Vbl_nlqyzqRpSpYVAJQojJc496",
//     "Content-Type": "application/json",
//     Authorization: "Basic TXViYXJha0licmFoaW0gKHB1YmxpYyk6amw4LWEzVmJsX25scXl6cVJwU3BZVkFKUW9qSmM0OTY=",
//   }
// })
//   .then(response => response.json())
//   .then(json => console.log(json))


const msg = {
  to: 'shithappens242@gmail.com', // Change to your recipient
  from: 'imubarak2424@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })