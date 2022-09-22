
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey('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')

// console.log(process.env.SENDGRID_API_KEY)



// const msg = {
//   to: 'shithappens242@gmail.com', // Change to your recipient
//   from: 'imubarak2424@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }

// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })
const firstFetch = () => {
  fetch("https://api.sendgrid.com/v3/mail/send", {
  method: "POST",
  //mode: "no-cors",
  // credentials: {
  //   'System' : 'Management',
  //   'Automation' : ''
  // },
  //Accept: "application/json",
  //Authorization: "Basic TXViYXJha0licmFoaW0gKHB1YmxpYyk6amw4LWEzVmJsX25scXl6cVJwU3BZVkFKUW9qSmM0OTY=",
  headers: {
    // "X-Auth-Token": "jl8-a3Vbl_nlqyzqRpSpYVAJQojJc496",
    "Content-Type": "application/json",
    'Authorization': "Bearer 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",
  },

  body: JSON.stringify({
    'personalizations' : [
      {
        'to' : [
          {
            'email' : 'imubarak2424@gmail.com'
          }
        ]
      }
    ],
    'from': {
      'email' : 'imubarak2424@gmail.com'
    },
    'subject' : 'Testing!!',
    'content' : [
      {
        'type' : 'text/plain',
        'value' : 'Heya!'
      }
    ]
  }),
})
  .then((response) => response.json())
  .then(json => {console.log(json)})
  .catch((error) => {
    console.error('Error:', error);
  });
}


const secondFetch = () => {
  let url = 'https://docs.google.com/spreadsheets/d/1kyXZddzslOrQwXKWARsJXTNs7ZYj_DgbKovNdyoriJU/';

  fetch(url)
  .then(res => res.text())
  .then(data => {
    console.log(data)
  })
}

const thirdFetch = () => {
  let url = 'https://sheet.best/api/sheets/150d2564-50dd-4282-9031-ccc30b646aed';

  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
}

const postToSheat = () => {
  //let url = 'https://sheet.best/api/sheets/150d2564-50dd-4282-9031-ccc30b646aed'; 

  fetch("https://sheet.best/api/sheets/5f05d562-cf94-492b-aac8-195d3c57ec67", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "Frist" : "Mike",
    "Last " : "Mike",
    "ID" : "7",
    "Value" : "100",
    "Created at": new Date(),
  })
})
  .then(response => response.json())
  .then(data => console.log('success: ', data))
  .catch((error) => {
    console.error('Error: ', error)
  })
}

const buttonFetch = document.getElementById('spreads');

buttonFetch,addEventListener('click', (e) => {
  postToSheat();
});
  

 //  https://docs.google.com/spreadsheets/d/1kyXZddzslOrQwXKWARsJXTNs7ZYj_DgbKovNdyoriJU/edit?usp=sharing