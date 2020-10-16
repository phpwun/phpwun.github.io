var [toggle,nav,test1,test2,test3,test4] = [document.querySelectorAll(".toggle")[0],document.querySelectorAll("nav")[0],document.querySelectorAll(".test1")[0],document.querySelectorAll(".test2")[0],document.querySelectorAll(".test3")[0],document.querySelectorAll(".test4")[0]]
toggle_open_text = 'Open';
toggle_close_text = 'Close';
var body = document.getElementsByTagName('body')[0];
toggle.addEventListener('click', function() {
	nav.classList.toggle('open');
  if (nav.classList.contains('open')) {
    toggle.innerHTML = toggle_close_text;
		body.style.backgroundRepeat = "repeat";
  } else {
    toggle.innerHTML = toggle_open_text;
		body.style.backgroundRepeat = "no-repeat";
  }
}, false);

test1.addEventListener('click', function() { // About
	window.open('./about.html', "_self");
}, false);

test2.addEventListener('click', function() { // Reviews
	window.open('./reviews.html', "_self");
}, false);

test3.addEventListener('click', function() { // Menu
	window.open('./products.html', "_self");
}, false);

test4.addEventListener('click', function() { // Home
	window.open('./index.html', "_self");
}, false);

setTimeout(function(){
	nav.classList.toggle('open');
}, 800);
