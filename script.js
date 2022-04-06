let city = document.getElementById("city");
let temp = document.getElementById("temp");
let country = document.getElementById("country");
let descrip = document.getElementById("descrip");
let input = document.getElementById("input");
let form = document.getElementById("form");
let fail = document.getElementById("fail");
let video = document.querySelector("video");

video.src = './assets/extreme.mp4';

function convert(val) {
  return (val - 273).toFixed();
}

function getApi() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=731ebe35142a1bfcacb3789bb14c5069&`)
    .then(response => response.json())
    .then(data => {
      fail.innerHTML = '';
      input.value = '';

      city.innerHTML = data['name'];
      country.innerHTML = data['sys']['country'];
      temp.innerHTML = convert(data['main']['temp']) + '\xB0C / ' + (data['main']['temp']).toFixed() + "\xB0F";
      descrip.innerHTML = data['weather'][0].description;

      if(data['weather'][0].main === 'Clear') {
        video.src = './assets/clear.mov';
      }
      else if(data['weather'][0].main === 'Snow') {
        video.src = './assets/snow.mp4';
      }
      else if(data['weather'][0].main === 'Rain') {
        video.src = './assets/rain.mp4';
      }
      else if(data['weather'][0].main === 'Clouds') {
        video.src = './assets/clouds.mov';
      }
      else if(data['weather'][0].main === 'Extreme') {
        video.src = './assets/extreme.mp4';
      }
    })
    .catch(() => {
      fail.innerHTML = "this city is not find";
      city.innerHTML = " ";
    });
}


form.addEventListener('submit', (event) => {
  getApi();
  event.preventDefault();
});
