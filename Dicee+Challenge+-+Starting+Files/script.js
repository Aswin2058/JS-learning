
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var imageSource1 = "images/dice" +  randomNumber1 + ".jpeg";

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var imageSource2 = "images/dice" + randomNumber2 + ".jpeg";



document.querySelectorAll(".dice img")[0].setAttribute("src", imageSource1);
document.querySelectorAll(".dice img")[1].setAttribute("src", imageSource2);


var winnerText = document.querySelector(".container h1"); 
if (randomNumber1 === randomNumber2){
    winnerText.innerHTML = "Draw";
}else if (randomNumber1 > randomNumber2){
    winnerText.innerHTML = "Player 1 Wins";
} else {
     winnerText.innerHTML = "Player 2 wins";
}