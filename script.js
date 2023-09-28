document.addEventListener("DOMContentLoaded", function () {

    var jokeElement = document.getElementById("joke");
    var getJokeButton = document.getElementById("getJoke");

    var apiUrl = "https://api.chucknorris.io/jokes/random";

    function getChuckNorrisJoke() {
        fetch(apiUrl)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("No se obtuvo el chiste");
            })
            .then(function (data) {
                jokeElement.textContent = data.value;
            })
            .catch(function (error) {
                console.error("Error:", error);
            });
    }

    getJokeButton.addEventListener("click", getChuckNorrisJoke);

    getChuckNorrisJoke();
});
