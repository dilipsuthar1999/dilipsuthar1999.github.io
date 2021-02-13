// nav slide
function openNav() {
  	document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  	document.getElementById("mySidenav").style.width = "0";
}


// Booking Date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy+'-'+mm+'-'+dd;

var maxdate = new Date();
maxdate.setDate(maxdate.getDate() + 7);
var d = String(maxdate.getDate()).padStart(2, '0');
var m = String(maxdate.getMonth() + 1).padStart(2, '0');
var y = maxdate.getFullYear();
maxdate = y+'-'+m+'-'+d

document.getElementById('booking-date').value = today;

document.getElementById('booking-date').min = today;

document.getElementById('booking-date').max = maxdate;


// time vise display
document.getElementById('morning').style.display='block';

function timevise(event,time){
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("timevisedisplay");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("booking-btw1");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" booking-btw1-active", "");
  }
  document.getElementById(time).style.display = "block";
  event.currentTarget.className += " booking-btw1-active";
}

// show turf images
function openimages() {
  	document.getElementById("show-images-turf").style.width = "100%";
}

function closeimages() {
  	document.getElementById("show-images-turf").style.width = "0";
}

// booking system
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.booking-timing .book-time-add');
const count = document.getElementById('count');
const total = document.getElementById('total');

let ticketPrice = document.getElementById('turf-price').value;

function updateSelectedCount() {
  	const selectedSeats = document.querySelectorAll('.booking-timing .book-time-add:checked');
  	const selectedSeatsCount = selectedSeats.length;
  	count.innerText = selectedSeatsCount;
  	total.innerText = selectedSeatsCount * ticketPrice;
}

container.addEventListener('click', e => {
  	if (e.target.classList.contains('.book-time-add')) {
    	e.target.classList.toggle('.book-time-add:checked');
  	}
  	updateSelectedCount();
});