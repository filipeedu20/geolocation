const x = document.getElementById("demo");

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		x.innerHTML = "O seu navegador não suporta Geolocalização.";
	}
}

function showPosition(position) {
	let latitude  = position.coords.latitude;
	let longitude = position.coords.longitude
	x.innerHTML = `Latitude: ${latitude} 
		<br>Longitude: ${longitude} `;
	/**Destructuring assignt com objetos */
	const coordenadas = {lat: latitude, long: longitude};
	let {lat,long} = coordenadas;
	console.log(coordenadas);

	class Ponto{
		constructor(local){
			this.local = local;
			this.latitude = latitude;
			this.longitude = longitude;
		}
		getLocal(){
			return this.local;
		};
		GetLatitude()
	}

}

