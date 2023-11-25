let scoreSpan = localStorage.getItem("scoreSpan", score);
console.log(scoreSpan);
var scoreboard = document.getElementById("score");
scoreboard.innerHTML = Math.floor(scoreSpan/100);