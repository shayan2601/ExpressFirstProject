const searchButton = document.getElementById("btn");
const cityName = document.getElementById("cityname");
const countryandCity = document.getElementById("country&city");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

function getDateDayMonth() {
  let date = new Date().getDate();
  let months = new Array();
  months[0] = "Jan";
  months[1] = "Feb";
  months[2] = "Mar";
  months[3] = "Apr";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "Aug";
  months[8] = "Sept";
  months[9] = "Oct";
  months[10] = "Nov";
  months[11] = "Dec";
  let month = months[new Date().getMonth()];
  let dates = document.getElementById("date");

  dates.innerText = `${date} ${month}`;

  let weekday = new Array();
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let day = weekday[new Date().getDay()];
  let days = document.getElementById("day");
  console.log(day);
  days.innerText = day;
}
getDateDayMonth();

async function getCity(e) {
  e.preventDefault();

  let cityVal = cityName.value;

  if (cityVal === "") {
    countryandCity.innerText = "Plz enter your city name";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4f0d6adc249c9e188e70a6c23bcc9a4b`;
      const getData = await fetch(url);
      const jsonData = await getData.json();
      const arrData = [jsonData];
      console.log(arrData);

      temp.innerText = arrData[0].main.temp;
      temp_status.innerText = arrData[0].weather[0].main;
      countryandCity.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
    } catch (err) {
      alert(err.message);
    }
  }
}
searchButton.addEventListener("click", getCity);
