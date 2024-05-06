window.onload = function() {
	const form = document.getElementById("form");
	form.addEventListener("submit",submit);
}

function submit(event) {
	event.preventDefault();
	const username = document.querySelector("#username").value;
	const password = document.querySelector("#password").value;
	let user = {
		"username":username,
		"password":password
	}
	login(user);
}

async function login(user) {
	const request = {
		"method":"POST",
		"headers":{
			"Content-type":"application/json"
		},
		"body":JSON.stringify(user)
	}
	let response = await fetch("/login",request);
	if(!response) {
		return;
	}
	if(response.ok) {
		console.log("Logged in");
	} else {
		console.log("Server responded with a status "+response.status+" "+response.statusText)
	}
	
}