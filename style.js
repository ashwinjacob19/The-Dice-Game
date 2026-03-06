var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var randomDIce1 = "dice"+randomNumber1+".png";
var randomImageSource1 = "images/"+randomDIce1;
console.log(randomImageSource1);

document.querySelector(".img1").setAttribute("src",randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomDIce2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+randomDIce2;
console.log(randomImageSource2);

document.querySelector(".img2").setAttribute("src",randomImageSource2)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}