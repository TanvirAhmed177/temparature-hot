const input = document.getElementById("input-value");
const button = document.getElementById("btn");
const image = document.getElementById("image");
const name = document.getElementById("name");
const desc = document.getElementById("desc");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=5b83d4d8adcd4f046ec24ef14f4fcdea"
  )
    .then((response) => response.json())
    .then((data) => {
      let tempValue = data["main"]["temp"];
      tempValue = Math.round(tempValue - 273);
      let nameValue = data["name"];
      let descValue = data["weather"][0]["description"];
      let id = data["weather"][0]["id"];
      console.log(data);
      if (id < 250) {
        image.src = "https://openweathermap.org/img/wn/11d@2x.png";
      }
      if (id < 350) {
        image.src = "https://openweathermap.org/img/wn/09d@2x.png";
      }
      if (id < 550) {
        image.src = "https://openweathermap.org/img/wn/10d@2x.png";
      }
      if (id < 650) {
        image.src = "https://openweathermap.org/img/wn/13d@2x.png";
      }
      if (id < 800) {
        image.src = "https://openweathermap.org/img/wn/50d@2x.png";
      }
      if (id === 800) {
        image.src = "https://openweathermap.org/img/wn/01d@2x.png";
      }
      if (id > 800) {
        image.src = "https://openweathermap.org/img/wn/02d@2x.png";
      }
      name.innerHTML = nameValue;
      desc.innerHTML = descValue;
      temp.innerHTML = tempValue;
      input.value = "";
    })
    .catch((err) => alert("Wrong city name!"));
});
