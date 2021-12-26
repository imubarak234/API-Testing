// // fetch("https://api.tvmaze.com/v1/user/follows/networks", {
// //   method: "GET",
// //   mode: "no-cors",
// //   credentials: "include",
// //   //Accept: "application/json",
// //   //Authorization: "Basic TXViYXJha0licmFoaW0gKHB1YmxpYyk6amw4LWEzVmJsX25scXl6cVJwU3BZVkFKUW9qSmM0OTY=",
// //   headers: {
// //     "X-Auth-Token": "jl8-a3Vbl_nlqyzqRpSpYVAJQojJc496",
// //     "Content-Type": "application/json",
// //     Authorization: "Basic TXViYXJha0licmFoaW0gKHB1YmxpYyk6amw4LWEzVmJsX25scXl6cVJwU3BZVkFKUW9qSmM0OTY=",
// //   }
// // })
//   .then(response => response.json())
//   .then(json => console.log(json))

// fetch("https://api.tvmaze.com/lookup/shows?tvrage=24493")
// .then(response => response.json())
// .then(json => console.log(json))

const appID = 'rd64xKOPXxGFmPrj8pUt';

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
};

const get = async (url = "") => {
  const response = await fetch(url);

  return response.json();
}

get(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=item56765`)
.then(data => console.log(data))


const test = {
  item_id: "item56765",
  username: "Jane",
  comment: "Hello"
}

const test1 = {
  item_id: "item888",
  username: "Mick",
  comment: "whiles"
}

const test2 = {
  item_id: "item56765",
  username: "Phill",
  comment: "Next level testing"
}

// postData("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rd64xKOPXxGFmPrj8pUt/comments", test)
// .then(data => console.log(data.status))
// .catch(error => console.log("Error: ", error))





// fetch("https://api.tvmaze.com/shows/27")
// .then(response => response.json())
// .then((data) => {
//   console.log(data)
//   const angle = data.image.medium
//   display(angle);
// })

//const btoa = require('C:/laragon/bin/nodejs/node-v10.14.2-win-x64/node_modules/btoa');
//console.log(btoa('test'));

// const body = document.querySelector('body');

// const display = (image) => {
//   const img = document.createElement('img')
//   img.setAttribute('src', image)
//   body.appendChild(img);
// }

// fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/", {
//   method: "POST",
// })
//   .then(response => console.log(response.json()))
//   .then(json => console.log(json))

// export const List = ({ show } = {}) => `
//   <li>
//     <div class="show-img">
//       <img src=${show.image.medium} alt="show image">
//     </div>
//     <div class="tv-title">
//       <p>${show.name}</p>
//       <p data-id=${show.id}><i class="far fa-thumbs-up"></i> 2 likes</p>
//     </div>
//     <button type="button" class="btn comment-btn" data-id=${show.id}>Comments</button>
//   </li>
// `;
