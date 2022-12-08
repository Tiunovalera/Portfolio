let validLayout = 10;
let semantics = 20;
let compliance = 48; 
let css = 12;
let interactive = 20;

let sumOfPoints = validLayout + semantics + compliance + css + interactive;
console.log(sumOfPoints);



//burger
let menuBtn = document.querySelector('.burger-btn');
let menu = document.querySelector('.burger-menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})