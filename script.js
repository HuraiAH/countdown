//det html id and class
const endDate = "17 october 2023 09:00 pm";
document.getElementById("end_date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function conDown() {
  let end = new Date(endDate);
  let date = new Date();
  let difference = (end - date) / 1000;
  let day = 24; // hours
  let hours = 3600; //second
  let minute = 60; // minute

  //   console.log(Math.floor(difference / 3600 / 24));
  inputs[0].value = Math.floor(difference / hours / day);
  //console.log(Math.floor(difference / hours) % minute);
  inputs[1].value = Math.floor(difference / hours) % day;
  //console.log(Math.floor(difference / minute) % minute);
  inputs[2].value = Math.floor(difference / minute) % minute;
  //console.log(Math.floor(difference) % minute);
  inputs[3].value = Math.floor(difference) % minute;
}
conDown();
