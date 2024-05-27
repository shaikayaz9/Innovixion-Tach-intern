
let p = document.getElementById("p1");
let v = prompt("Enter you year with 4 digit (make sure 2024 or + for better result)!");

let countdownD = new Date(`dec 31, ${v} 23:59:59`);

let a = setInterval(function(){

	var today = new Date().getTime();

	let distance = countdownD - today;

	let days = Math.floor(distance / (1000 * 60 * 60 *24));
	let hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
	let seconds = Math.floor((distance % (1000 * 60))/ 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
})

    p.innerHTML = `Countdown started from ( ${v} ) to ${ new Date()}`;
    p.style.color = "red";
    p.style.border = "2px solid white"

