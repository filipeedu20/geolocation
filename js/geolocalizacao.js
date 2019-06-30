var x = document.getElementById("demo");

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		x.innerHTML = "O seu navegador não suporta Geolocalização.";
	}
}

function showPosition(position) {
	let latitude  = position.coords.latitude;
	let logintude = position.coords.longitude
	x.innerHTML = `Latitude: ${latitude} 
		<br>Longitude: ${logintude} `;
}
