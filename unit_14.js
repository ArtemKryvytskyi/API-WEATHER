function greateElemnt() {
    let div = document.querySelector(".package");
    let listOptions = {
        "London": 2643743,
        "Minsk": 625144,
        "Ostrava": 3068799,
        "Praha": 3067695,
    };
    let listSelects = [];
    createSelect();

    function createSelect() {
        let select = document.createElement("select");
        listSelects.push(select);
        select.id = `city`;
        select.className = "package-name";
        div.prepend(select);

        for (let key in listOptions) {
            let option = document.createElement("option");
            option.value = listOptions[key];
            option.text = key;
            select.add(option);
        }
    }

}
function getWeather() {
    let cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}
const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "525249f8492f4ec55098517ce7bef1fb",
}
function showWeather(data) {
    document.querySelector(".price").innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.direction').textContent = `Wind direction: ${data.wind['deg']}`;
    document.querySelector(".speed").textContent = `Wind speed: ${data.wind["speed"]}`;
    document.querySelector(".pressure").textContent = `Pressure: ${data.main["pressure"]}`;
    document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`

}
greateElemnt();
getWeather();
document.querySelector('#city').onchange = getWeather;
document.querySelector('.button-primary').onclick = getWeather;