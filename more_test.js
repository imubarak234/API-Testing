const body = {
  item_id: "item3",
  title: "testaaa",
  category: "Fictleaf",
}

const datas = { 
  "item_id": "item1",
}

fetch("https://api.twilio.com/2010-04-01/Accounts/AC21613e24f57fc71ea268a3f8213b31f6/Messages.json", {
  method: "GET",
  mode: "no-cors",
  credentials: {
    'System' : 'Management',
    'Automation' : ''
  },
  //Accept: "application/json",
  //Authorization: "Basic TXViYXJha0licmFoaW0gKHB1YmxpYyk6amw4LWEzVmJsX25scXl6cVJwU3BZVkFKUW9qSmM0OTY=",
  headers: {
    "X-Auth-Token": "jl8-a3Vbl_nlqyzqRpSpYVAJQojJc496",
    "Content-Type": "application/json",
    Authorization: "Basic TXViYXJha0licmFoaW0gKHB1YmxpYyk6amw4LWEzVmJsX25scXl6cVJwU3BZVkFKUW9qSmM0OTY=",
  }
})
  .then(response => response.json())
  .then(json => console.log(json))

