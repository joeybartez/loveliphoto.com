'use strict';

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', doSomething);
} else {
	doSomething();
}

function doSomething() {
	document.getElementById('nav-button-text').addEventListener('click', toggleNav);
	document.getElementById('nav-button-icon').addEventListener('click', toggleNav);
}

function toggleNav(event) {
	document.querySelector('nav').classList.toggle('transform');
}