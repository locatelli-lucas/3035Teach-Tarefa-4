const colors = ['red', 'purple', 'orange', 'blue', 'pink', 'brown', 'green', 'yellow', 'gray'];
var getButton = document.getElementById('button')

function trocaCor() {
    var randomNum = Math.floor(Math.random()*9);
    getButton.style.backgroundColor = colors[randomNum];
}

getButton.addEventListener("click", trocaCor);

