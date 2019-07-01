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
			this.lat = latitude;
			this.long = longitude;
		}
		getLocal() {
			return this.local;
		};
		getLat() {
			return this.lat;
		};
		getLong() {
			return this.long;
		};
	}
	//Criando uma nova instancia para Ponto
	const NovoPonto = new Ponto('Ponto onde está o dispositivo');

	//Definindo valores para Novo Ponto
	NovoPonto.getLat();
	NovoPonto.getLong();
	
	//Acessando as propriedades
	 console.log(NovoPonto.getLocal());
	 console.log(NovoPonto.getLat());
	 console.log(NovoPonto.getLong());
}

