
const WEATHER_TOKEN = '8666579af11623305d159f30286e0b1e';

let cityName = 'Kirishi';

const GET_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'
                        + '?q=' + cityName
                        + '&appid=' + WEATHER_TOKEN
                        + '&lang=ru'
                        + '&units=metric';

axios.get(GET_WEATHER_URL).then(response => {
    console.log(response.data);

    const temp = response.data.main.temp;

    let output = document.getElementById('output');
    output.innerHTML = 'В городе ' + cityName + ' ' + temp + ' градусов.';
});