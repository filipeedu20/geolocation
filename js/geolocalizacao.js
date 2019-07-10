const x = document.getElementById("demo");
var map ;



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
		getLatitude(){
			return this.latitude;
		};
		getLongitude(){
			return this.longitude;
		};
	}
	//Criando uma nova instancia para Ponto
	const NovoPonto = new Ponto('Casa');

	//Definindo valores para Novo Ponto
	NovoPonto.latitude(latitude);
	NovoPonto.longitude(longitude);
	//Acessando as propriedades
	 console.log(NovoPonto.getLocal());
	 console.log(NovoPonto.getLatitude().length);
	 console.log(NovoPonto.getLongitude().length);
}
		


function loadLocations(){
	pontos = [
		{
			"Latitude": -19.918178,
			"Longitude": -43.942461
		},
		
		{
			"Latitude": -19.920393,
			"Longitude": -43.944180
		},
		{
			"Latitude": -19.915134,
			"Longitude": -43.947737
		},
		{
			"Latitude": -19.904994,
			"Longitude": -43.898574
		}

	];

	$.each(pontos, function(index, pontos) {		
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(pontos.Latitude, pontos.Longitude),
			title: "Ponto marcado",
			icon: 'img/flag.png',	
			map: map
		});
	});
}
// Inicia mapa 
function initMap() {
	
	var latitude = -19.919086;
	var longitude =   -43.938810;
	
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: latitude, lng:  longitude},				
	zoom: 16
	});

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(latitude, longitude),
		title: "Localização",
		map: map,
		icon: 'img/location.png'	
	});

	// abre pontos marcados no mapa 
	loadLocations();
}