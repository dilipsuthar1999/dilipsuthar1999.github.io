// Preloading Page
var myVar;

function bodymyFunction() {
  	myVar = setTimeout(loadPage, 2000);
}

function loadPage() {
  	document.getElementById("loading").style.display = "none";
  	document.getElementById("myDiv").style.display = "block";
}

// nav slide sm
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// Product show
var showproductimg = 1;
showproduct(showproductimg);

function showproduct(n){
	var i;
  	var slides = document.getElementsByClassName("product-box");
  	var dots = document.getElementsByClassName("product-box-item");
  	if(n<=slides.length){
  		slideIndex = n
  	}
  	for (i=0; i<slides.length; i++){
    	slides[i].style.display = "none";
    	dots[i].style.backgroundColor="#757575";
  	}
  	slides[slideIndex-1].style.display = "inline-block";
  	dots[slideIndex-1].style.backgroundColor="#b3b3b3";
}


// cart button
function increment() {
    document.getElementById('demoInput').stepUp();
}

function decrement() {
    document.getElementById('demoInput').stepDown();
}