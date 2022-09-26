// var vidElement0 = document.getElementById('video0');
// var vidElement1 = document.getElementById('video1');
// var vidElement2 = document.getElementById('video2');


//     var vidSource0 = "./video/video.mp4";
//     var vidSource1 = "./video/video(2).mp4";
//     var vidSource2 = "./video/video(1).mp4";
    
//     vidElement0.src = vidSource0;
//     vidElement1.src = vidSource1;
//     vidElement2.src = vidSource2;
    

//     var rand = Math.floor((Math.random() * 3 )); //5 = length of vidsources (Start counting from 0)
    
//     var vidRandom = document.getElementById("video" + rand);
//     console.log("Video "+rand+ " will be displayed first.");
    
//     vidRandom.style.display = "block";
   

   
//     vidElement0.addEventListener('ended', function(e) {
//     vidElement1.play();
   
//     vidElement0.style.display = "none";
//      vidElement1.style.display = "block";
// });

//     vidElement1.addEventListener('ended', function(e) {
//     vidElement2.play();
    
//     vidElement1.style.display = "none";
//     vidElement2.style.display = "block";
//   });
  
//     vidElement2.addEventListener('ended', function(e) {
//     vidElement0.play();
    
//     vidElement2.style.display = "none";
//     vidElement0.style.display = "block";
//   });
  
    
const d = new Date();

console.log(d.toDateString());