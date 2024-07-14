function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => renderJoke(data))
    .catch(() => renderError());
}

setInterval(fetchJoke, 60000);

fetchJoke();

function renderJoke(data) {
  const setup = document.getElementById("setup");
  const punchline = document.getElementById("punchline");
  const error = document.getElementById("error");

  error.innerHTML = "";
  setup.innerHTML = data.setup;
  punchline.innerHTML = data.punchline;
}

function renderError() {
  const error = document.getElementById("error");
  error.innerHTML = "Whoops, something went wrong. Please try again later!";
}