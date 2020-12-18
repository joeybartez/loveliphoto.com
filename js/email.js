'use strict';

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', doSomething);
} else {
	doSomething();
}

function doSomething() {
	document.getElementById('contact-form').addEventListener('submit', sendEmail);
}

function sendEmail(event) {
	event.preventDefault();

	let input = event.currentTarget;
	let submit = input[5];
	submit.value = "SENDING...";
	submit.style.border = "thick solid #3E3E3E";
	submit.style.background = "#3E3E3E";
	submit.style.color = "#fcd2d3";

	let name = input[0].value;
	let phone = input[1].value;
	let email = input[2].value;
	let subject = input[3].value;
	let message = input[4].value;

	let body = "NAME: " + name + "<br>" +
	"EMAIL: " + email + "<br>" +
	"PHONE: " + phone + "<br>" +
	"<br>" + "MESSAGE:" + "<br>" + message;
	
	//SmtpJS.com
	Email.send({
		SecureToken: "b0b558c9-5dc9-4680-9863-300d8f2675e2",
		To: "liebennyboy@gmail.com",
		From: "betty@loveliphoto.com",
		Subject: subject,
		Body: body
	}).then(emailCallback);
}

function emailCallback(message) {
	let submit = document.getElementById("contact-form").elements["submit"];

	if (message == "OK") {
		submit.value = "SENT!"
	} else {
		submit.value = "ERROR PLEASE TRY AGAIN"
	}
}