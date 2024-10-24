let time = document.getElementById("time");

let date = document.getElementById("date");

setInterval(() => {
  today();
}, 1000);

function today() {
  let today = new Date();
  // console.log(today)
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "jun",
    "Jul",
    "aug",
    "sep",
    "Oct",
    "Nov",
    "dec",
  ];
  const dayNames = [
    "Sat",
    "Sun", 
    "Mon", 
    "Tue", 
    "Wed", 
    "Thu", 
    "Fri"
];
  // let currentTime = today.getHours();
  // console.log(currentTime)
  let currentTime = `${
    today.getHours() <= 9 ? "0" + today.getHours() : today.getHours()
  } : ${
    today.getMinutes() <= 9 ? "0" + today.getMinutes() : today.getMinutes()
  } : ${
    today.getSeconds() <= 9 ? "0" + today.getSeconds() : today.getSeconds()
  }`;
  // console.log(currentTime);
  time.innerHTML = currentTime;
  let currentDate = `${dayNames[today.getDay() + 1]}, ${today.getDate()},  ${
    monthNames[today.getMonth()]
  }, ${today.getFullYear()}`;
  // console.log(currentDate)
  date.innerHTML = currentDate;
  
}

