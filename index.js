var randomnumber1 = Math.floor(((Math.random() * 6))) + 1;
var randomnumber2 = Math.floor(((Math.random() * 6))) + 1;


document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+ randomnumber1.toString() + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+ randomnumber2.toString() + ".png");


if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerText = "Player 1 wins!";
}else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerText = "Player 2 wins!";
}else{
    document.querySelector("h1").innerText = "Draw!"
}