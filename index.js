randomNumber1 = Math.floor(Math.random() * 6) + 1;

randomDiceImage = "dice" + randomNumber1 + ".png";

randomImageSourse = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSourse);


randomNumber2 = Math.floor(Math.random() *6) + 1;

randomDiceImage = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 win";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 win";
}
else{
    document.querySelector("h1").innerHTML = "Tie";
}