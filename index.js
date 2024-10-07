const redColor = document.querySelector(".red");
console.log(redColor);

const blackColor = document.querySelector(".black");
console.log(blackColor)

const grayColor = document.getElementsByClassName("gray");
console.log(grayColor)

const imageCard = document.querySelector("img");


const feedbackBtn = document.querySelector(".feedback");

const cartButton = document.getElementById("button");

const itemTag = document.getElementsByTagName("h3")[0];

console.log(imageCard,feedbackBtn,itemTag,cartButton);

redColor.addEventListener("click",function (){
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.src="https://images.unsplash.com/photo-1495435229349-e86db7bfa013?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
});

blackColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
  imageCard.src =
    "https://images.unsplash.com/photo-1495435229349-e86db7bfa013?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
});

grayColor.getElementsByClassName("click", function () {
  cartButton.style.backgroundColor = "gray";
  itemTag.style.backgroundColor = "gray";
  imageCard.src =
    "https://images.unsplash.com/photo-1495435229349-e86db7bfa013?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
});