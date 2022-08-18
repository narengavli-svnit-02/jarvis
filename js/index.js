var time = document.querySelector(".time");
var dateTime = document.querySelector(".date-time");
var gwish = document.querySelector(".wish");

// music
var morning = new Audio("../music/morning.mp3");
var afternoon = new Audio("../music/afternoon.mp3");
var evening = new Audio("../music/evening.mp3");

var num = 1;
function updateClock() {
  // Get the current time, day , month and year
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var day = now.getDay();
  var date = now.getDate();
  var month = now.getMonth();
  var year = now.getFullYear();

  // store day and month name in an array
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // format date and time
  var period = hours < 12 ? "AM" : "PM";
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  date = date < 10 ? "0" + date : date;
  // display date and time
  if (hours <= 9) {
    time.innerHTML = "0" + hours + ":" + minutes + " " + period;
  } else {
    time.innerHTML = hours + ":" + minutes;
  }
  dateTime.innerHTML = monthNames[month] + " " + date + ", " + year;

  if (period == "AM") {
    gwish.innerHTML = "Good Morning";
  } else if (period == "PM" && hours <= 3) {
    gwish.innerHTML = "Good Afternoon";
  } else if (period == "PM" && hours > 3 && hours <= 8) {
    gwish.innerHTML = "Good Evening";
  } else {
    gwish.innerHTML = "Good Night";
  }

  //  voice wish
  if (period == "AM" && num == 1) {
    morning.play();
    num += 1;
  } else if (period == "PM" && hours <= 3 && num == 1) {
    afternoon.play();
    num += 1;
  } else if (period == "PM" && hours >= 3 && hours <= 8 && num == 1) {
    evening.play();
    num += 1;
  }
}

updateClock();
setInterval(updateClock, 1000);
