
const looper = () => {
  let count = 0;
  const setting = setInterval(function(){
    if (count >= 2){
      console.log("ended")
      clearInterval(setting)
    }
    else {
      console.log("Time Interval")
      count ++;
    }
  },1000 * 2);
};

looper();

fetch('https://sheet.best/api/sheets/5f05d562-cf94-492b-aac8-195d3c57ec67')
  .then((res) => (res.json()))
  .then((data) => {
    console.log(data)

  })