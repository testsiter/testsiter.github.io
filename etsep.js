document.addEventListener("DOMContentLoaded", function() {
    var date1, date2;  
    date1 = new Date("09/01/1993");
    function addZero(i) {
      if (i < 10) {i = "0" + i}
      return i;
    }
    function eternal_september() {
      date2 = new Date();  
      var time_difference = date2.getTime() - date1.getTime();  
      var timezone = -date2.getTimezoneOffset() / 60;
      var sign = "+";
      if (timezone < 0) {
        sign = "";
      }
      let h = addZero(date2.getHours());
      let m = addZero(date2.getMinutes());
      let s = addZero(date2.getSeconds()); 
      var days_difference = Math.floor(time_difference / (1000 * 60 * 60 * 24)) + 1;  
      var suffix = "th";
      if (days_difference % 10 == 1 && days_difference % 100 != 11) {
        suffix = "st";
      } else if (days_difference % 10 == 2 && days_difference % 100 != 12) {
        suffix = "nd";
      } else if (days_difference % 10 == 3 && days_difference % 100 != 13) {
        suffix = "rd";
      }
      document.getElementById("etsep").innerHTML = "It is currently " + h + ":" + m + ":" + s + " GMT" + sign + timezone + ", " + days_difference + suffix + " September, 1993. Welcome to the September that never ends. Welcome to the Internet.";  
    }

    eternal_september();
    setInterval(eternal_september, 500);
  });