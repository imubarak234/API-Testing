const testData = [{
  Categories : "Participants",
  "Company/Organization" : null,
  Date : null,
  Email : "imubarak2424@gmail.com",
  "First Name" : "JUNAIDU",
  "Institutional Affiliation" : null,
  "Last Name" : "SALISU",
  "Phone Number" : null
}, {
  Categories : "Participants",
  "Company/Organization" : null,
  Date : null,
  Email : "m.bthedon@yahoo.com",
  "First Name" : "JUNAIDU",
  "Institutional Affiliation" : null,
  "Last Name" : "SALISU",
  "Phone Number" : null
}, {
  Categories : "Participants",
  "Company/Organization" : null,
  Date : null,
  Email : "shithappens242@gmail.com",
  "First Name" : "JUNAIDU",
  "Institutional Affiliation" : null,
  "Last Name" : "SALISU",
  "Phone Number" : null
}];

    //   fetch('http://localhost:3000/api/v1/emails', {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     "email" : testData[0].Email,
    //     "name" : `${testData[0]["Last Name"]} ${testData[0]["First Name"]}`,
    //     "category" : testData[0].Categories
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('success: ', data);
    //   })

      // async function postData(url = '', data = {}) {
      //   // Default options are marked with *
      //   const response = await fetch(url, {
      //     method: 'POST', 
      //     mode: 'no-cors', 
      //     cache: 'no-cache', 
      //     credentials: 'same-origin', 
      //     headers: {
      //       'Content-Type': 'application/json',
            
      //     },
          
      //     body: JSON.stringify(data) // body data type must match "Content-Type" header
      //   });
      //   return response.text();// parses JSON response into native JavaScript objects
      // }
      
      // postData('http://localhost:3000/api/v1/emails', {
      //   "email" : testData[0].Email,
      //   "name" : `${testData[0]["Last Name"]} ${testData[0]["First Name"]}`,
      //   "category" : testData[0].Categories
      // })
      // .then((data) => {
      //   console.log(JSON.parse(data));
      // });

const looper = async (data) => {
 
  for(let x = 733; x < data.length; x++){

    
    await fetch('http://localhost:3000/api/v1/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email" : data[x].Email,
        "name" : `${data[x]["Last Name"]} ${data[x]["First Name"]}`,
        "category" : data[x].Categories
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(x)
        console.log('success: ', data);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  }
};

 //looper(testData);
// console.log("Its working at this put")
// fetch('https://sheet.best/api/sheets/7d520258-c5f2-4cc6-8644-436ff5e3e6c5')
//   .then((res) => (res.json()))
//   .then((data) => {
//     console.log(data)
//     looper(data);
//   })