let loc = document.getElementById("location");
let tempimage = document.getElementById("temp-image");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let imagefile;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value = '';


});



const getWeather = async(city) => {
    try {


        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e09f211dddab057b7b55adfe199df05 `,

            { mode: 'cors' }

        );

        const weatherData = await response.json();
        console.log(weatherData);
        const { name } = weatherData;
        const { feels_like } = weatherData.main;
        const { id, main } = weatherData.weather[0];
        loc.textContent = name;
        climate.textContent = main;
        tempvalue.textContent = Math.round(feels_like - 273);
        if (id < 300 && id > 200) {
            tempimage.src = "thunderstorm.jpeg"
        } else if (id < 400 && id > 300) {
            tempimage.src = "cloud.jpeg"
        } else if (id < 600 && id > 500) {
            tempimage.src = "rain.jpeg"
        } else if (id < 700 && id > 600) {
            tempimage.src = "snowcloud.jpeg"
        } else if (id < 800 && id > 700) {
            tempimage.src = "cloud1.jpeg"
        } else if (id == 800) {
            tempimage.src = "cloudandsun.jpeg"
        }



    } catch (error) {
        alert('city not found');
    }
};






window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {




                long = position.coords.longitude;
                lat = position.coords.latitude;
                const proxy = "https://cors-anywhere.herokuapp.com/ ";


                const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6e09f211dddab057b7b55adfe199df05  `


                fetch(api).then((response) => {

                    return response.json();

                })

                .then(data => {


                    const { name } = data;
                    const { feels_like } = data.main;
                    const { id, main } = data.weather[0];


                    loc.textContent = name;
                    climate.textContent = main;
                    tempvalue.textContent = Math.round(feels_like - 273);
                    if (id < 300 && id > 200) {
                        tempimage.src = "thunderstorm.jpeg"
                    } else if (id < 400 && id > 300) {
                        tempimage.src = "cloud.jpeg"
                    } else if (id < 600 && id > 500) {
                        tempimage.src = "rain.jpeg"
                    } else if (id < 700 && id > 600) {
                        tempimage.src = "snowcloud.jpeg"
                    } else if (id < 800 && id > 700) {
                        tempimage.src = "cloud1.jpeg"
                    } else if (id == 800) {
                        tempimage.src = "cloudandsun.jpeg"
                    }
                    console.log(data);



                })










            }

        )
    }





})