let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = "images/alex-k0SwnevO_wk-unsplash.jpg";

imgArray[1] = new Image();
imgArray[1].src = "images/annie-spratt-yPudKlmWC9o-unsplash.jpg";

imgArray[2] = new Image();
imgArray[2].src = "images/jari-hytonen-VJBIn6n_gzI-unsplash.jpg";

imgArray[3] = new Image();
imgArray[3].src = "images/markos-mant-aSCx7M1E4Vo-unsplash.jpg";

imgArray[4] = new Image();
imgArray[4].src = "images/olivier-guillard-FKJgBUDoVC0-unsplash.jpg";

imgArray[5] = new Image();
imgArray[5].src = "images/samuel-ferrara-1527pjeb6jg-unsplash.jpg";

const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

let counter = 0;



prevBtn.addEventListener("click", () =>{
   counter--;
});




nextBtn.addEventListener("click", () =>{
   counter++;
});

