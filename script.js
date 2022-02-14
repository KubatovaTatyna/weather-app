let city = document.getElementById("city");
let temp = document.getElementById("temp");
let country = document.getElementById("country");
let descrip = document.getElementById("descrip");
let input = document.getElementById("input");
let form = document.getElementById("form");
let fail = document.getElementById("fail");

function convert(val) {
  return (val - 273).toFixed();
}

function getApi() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=731ebe35142a1bfcacb3789bb14c5069`)
    .then(response => response.json())
    .then(data => {
      input.value = '';
      city.innerHTML = data['name'];
      country.innerHTML = data['sys']['country'];
      temp.innerHTML = convert(data['main']['temp']) + '\xB0C / ' + (data['main']['temp']).toFixed() + "\xB0F";
      descrip.innerHTML = data['weather'][0].description;
      console.log(data)
    })
    .catch(event => {
      fail.innerHTML = "this city is not find";
      city.innerHTML = " ";
      event.preventDefault();
    })
}


form.addEventListener('submit', (event) => {
  getApi();
  event.preventDefault();
})