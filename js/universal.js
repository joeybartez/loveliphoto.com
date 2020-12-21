'use strict';

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', doSomething);
} else {
	doSomething();
}

function doSomething() {
	let yScrollBarWidth = window.innerWidth - document.body.offsetWidth;
	document.documentElement.style.setProperty('--y-scroll-bar-width', yScrollBarWidth + 'px');
}