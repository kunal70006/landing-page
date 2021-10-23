const time = document.querySelector("time");
const greeting = document.getElementById("greeting");
const Name = document.getElementById("Name");
const focus = document.getElementById("answer");
const quote = document.getElementById("quote");

const showTime = () => {
  let today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();

  time.innerHTML = `${addZero(hr)}<span>:</span>${addZero(min)}`;
  setTimeout(showTime, 1000);
};

const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

const setBgGreet = () => {
  let today = new Date();
  let hour = today.getHours();

  if (hour > 6 && hour <= 12) {
    document.getElementById("hero-img").style.backgroundImage =
      "url('../assets/morning.jpg')";
    greeting.textContent = "Good Morning";
    //morn
  } else if (hour > 12 && hour <= 16) {
    document.getElementById("hero-img").style.backgroundImage =
      "url('../assets/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
    //afternoon
  } else if (hour > 16 && hour <= 23) {
    document.getElementById("hero-img").style.backgroundImage =
      "url('../assets/evening.jpg')";
    greeting.textContent = "Good Evening";
    //even
  } else {
    document.getElementById("hero-img").style.backgroundImage =
      "url('../assets/night.jpg')";
    greeting.textContent = "Nighty Night";
  }
};

const getName = () => {
  if (localStorage.getItem("Name") === null) {
    Name.textContent = "{Your Name}";
  } else {
    Name.textContent = localStorage.getItem("Name");
  }
};

const setName = (e) => {
  if (e.type === "keypress") {
    if (e.keyCode === 13) {
      localStorage.setItem("Name", e.target.innerText);
      Name.blur();
    } else {
      localStorage.setItem("Name", e.target.innerText);
    }
  }
};

const getFocus = () => {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "{Enter Focus}";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
};

const setFocus = (e) => {
  if (e.type === "keypress") {
    if (e.keyCode === 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    } else {
      localStorage.setItem("focus", e.target.innerText);
    }
  }
};

Name.addEventListener("keypress", setName);
Name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

const getQuote = () => {
  fetch("https://api.quotable.io/random?maxLength=50")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      quote.textContent = data.content;
    });
};

showTime();
setBgGreet();
getName();
getFocus();
getQuote();
