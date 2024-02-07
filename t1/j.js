function  timer(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
     var formattedTime = hours + ":" + minutes + ":" + seconds;

 
    var myDiv = document.getElementById("time");

   myDiv.textContent = formattedTime;
}
 
 
var currentTime;
 function starttimer(){
   f=   window.setInterval(timer,1000);
}
 

