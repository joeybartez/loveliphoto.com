'use strict';

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', doSomething);
} else {
	doSomething();
}

function doSomething() {
	resizeAbout();
	window.addEventListener('resize', resizeAbout);
	document.getElementById('meet-betty').addEventListener('click', meetBetty);
	document.getElementById('meet-betty-back').addEventListener('click', meetBetty);
	document.getElementById('meet-sharon').addEventListener('click', meetSharon);
	document.getElementById('meet-sharon-back').addEventListener('click', meetSharon);
}

function resizeAbout() {
	let portfolio = document.getElementById('portfolio');
	let yScrollBarWidth = window.innerWidth - document.body.offsetWidth;
	document.documentElement.style.setProperty('--y-scroll-bar-width', yScrollBarWidth + 'px');
}

function meetBetty(event) {
	document.getElementById('meet-betty').classList.toggle('hidden');
	document.getElementById('meet-betty-back').classList.toggle('hidden');

	var classList = document.getElementById('about').classList;
	classList.toggle('about-center');
	classList.toggle('about-left');
}

function meetSharon(event) {
	document.getElementById('meet-sharon').classList.toggle('hidden');
	document.getElementById('meet-sharon-back').classList.toggle('hidden');

	var classList = document.getElementById('about').classList;
	classList.toggle('about-center');
	classList.toggle('about-right');
}