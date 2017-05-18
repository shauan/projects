

let getInfo = function() {
  let zipCode = document.getElementById('place').value;
  let link = `http://api.openweathermap.org/data/2.5/weather?q=${zipCode},us&appid=695279dc68a830ecb71f824afea9c903`;
  let weather = new XMLHttpRequest();
  weather.open('GET', link, true);

  weather.onload = function() {
    let appz = (JSON.parse(weather.responseText));
    let convertCelsius = (appz.main.temp - 273.15);
    let mainCelsius = Math.round(convertCelsius);
    let celsiusMax = Math.round(appz.main.temp_max - 273.15);
    let celsiusMin = Math.round(appz.main.temp_min - 273.15);
    let horario = new Date();

    document.getElementById('city-name').innerHTML = appz.name + '<span class="small-country">' + appz.sys.country + '</span>';
    document.getElementById('temperature').innerHTML = mainCelsius + '&deg;' + '<span class="small-temp">' + 'C' + '</span>';
    document.querySelector('.horario').innerHTML =  horario.toLocaleTimeString();
    document.querySelector('.descr').innerHTML = appz.weather[0].description;
    document.querySelector('.imagem').innerHTML = '<img width="74" src="http://openweathermap.org/img/w/' + appz.weather[0].icon + '.png">';
    document.querySelector('.max-temp').innerHTML = 'max ' + celsiusMax;
    document.querySelector('.min-temp').innerHTML = 'min ' + celsiusMin;
    document.querySelector('.humidade').innerHTML = 'humidity ' + appz.main.humidity + '%';



  }
  weather.send();
}
