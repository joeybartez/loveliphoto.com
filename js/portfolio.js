'use strict';

let photos = [];
let spotlight = {};
let spotlightImg = {};
let leftArrow = {};
let rightArrow = {};
let i = 0;

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', doSomething);
} else {
	doSomething();
}

function doSomething() {
	initCoverPhoto();
	initGallery();
	initSpotlight();
}

function initCoverPhoto() {
	let img = document.getElementById('cover-photo');
	if (img.complete) {
		resizeCoverPhoto();
	} else {
		img.addEventListener('load', function() {
			resizeCoverPhoto();
		});
	}
}

function resizeCoverPhoto() {
	let img = document.getElementById('cover-photo');
	let navHeight = document.querySelector('nav').offsetHeight;
	img.style.height = 'calc(100vh - ' + navHeight + 'px)';
}

function initGallery() {
	photos = document.getElementById('gallery').children;
	for (let i = 0; i < photos.length; i++) {
		let img = photos[i];
		if (img.complete) {
			initImg(img);
		} else {
			img.addEventListener('load', function() {
				initImg(img);
			});
		}
	}
}

function initImg(img) {
	if (img.naturalHeight > img.naturalWidth) {
		img.classList.add('portrait');
	} else {
		img.classList.add('landscape');
	}
	img.addEventListener('click', enterSpotlight);
}

function initSpotlight() {
	spotlight = document.getElementById('spotlight');
	leftArrow = document.getElementById('left-arrow-div');
	rightArrow = document.getElementById('right-arrow-div');
	document.getElementById('x-button').addEventListener('click', exitSpotlight);
	document.getElementById('left-arrow').addEventListener('click', previousPhoto);
	document.getElementById('right-arrow').addEventListener('click', nextPhoto);
}

function enterSpotlight(event) {
	document.body.classList.toggle('spotlight');

	let img = event.currentTarget;
	i = Array.from(photos).indexOf(img);
	spotlightImg = img.cloneNode();

	spotlight.appendChild(spotlightImg);
	toggleArrows();
}

function exitSpotlight() {
	spotlight.removeChild(spotlightImg);
	document.body.classList.toggle('spotlight');
}

function previousPhoto() {
	i--;
	changePhoto();
	toggleArrows();
}

function nextPhoto() {
	i++;
	changePhoto();
	toggleArrows();
}

function changePhoto() {
	spotlight.removeChild(spotlightImg);
	spotlightImg = photos[i].cloneNode();
	spotlight.appendChild(spotlightImg);
	photos[i].scrollIntoView({block: "center"});
}

function toggleArrows() {
	if (i == 0) {
		leftArrow.classList.add('hidden');
		rightArrow.classList.remove('hidden');
	} else if (i == photos.length - 1) {
		leftArrow.classList.remove('hidden');
		rightArrow.classList.add('hidden');
	} else {
		leftArrow.classList.remove('hidden');
		rightArrow.classList.remove('hidden');
	}
}