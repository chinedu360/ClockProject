setInterval(showTime, 10);
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    this.name = "chinedu okere victor";
    console.log(this.name);
  }
  //sayAge()
  sayAge() {
    return (this.age = 20);
  }
}

let names = new Person();

let age = names.sayAge();

console.log(age);

//create a functiuon called showTime
function showTime() {
  //init the date object
  let time = new Date();

  //get the hours, minutes, and seconds
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  //get miliseconds
  // let miliseconds = time.getMilliseconds();

  am_pm = "AM";

  //convert the hours to 12 hour format
  if (hours > 12) {
    hours = hours - 12;
    // hours -= 12;
    am_pm = "PM";
  }

  //set hours to AM when hour is == 0
  if (hours === 0) {
    hr = 12;
    am_pm = "AM";
  }

  //HH:MM:SS

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  // miliseconds = miliseconds < 10 ? "0" + miliseconds : miliseconds;

  let currentTime = `${hours}:${minutes}:${seconds}: ${am_pm}`;
  // let nowTime = hours + ":" + minutes + ":" + seconds + " " + am_pm;
  // console.log("now time:", nowTime);
  // console.log("currentTime:", currentTime);

  document.getElementById("clock").innerHTML = currentTime;
}

showTime();
