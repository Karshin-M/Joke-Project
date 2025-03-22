const button = document.getElementById("button");
let jokeContent = document.getElementById("jokecontent");
const joke = document.getElementById("joke");
console.log(jokeContent);

button.onclick = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke").then(function(response) {
            button.textContent = "Next";
            jokeContent = " ";
            jokeContent.textContent = response.data.setup;
            // console.log(jokeContent);
            setTimeout(() => {
                joke.textContent = response.data.punchline;
            }, 1500);
        })
        .catch(function(error) {
            console.log(error);
        })
};