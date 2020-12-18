'use strict';

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', doSomething);
} else {
	doSomething();
}

function doSomething() {
	try {
		if (window.sitecakeGlobals || sitecakeGlobals.editMode == true) {
			document.body.style.overflowX = 'visible';
			document.getElementById('about').style.transform = 'none';
		}
	} catch (error) {
		if (!(error instanceof ReferenceError)) {
			console.error(error);
		}
	}
}