const x = document.getElementById("demo");
var map ;

function getLocation() {
	var retorno = false; 
	if (navigator.geolocation) {		
		retorno = navigator.geolocation.getCurrentPosition(showPosition);		
	} else {
		retorno = "O seu navegador não suporta Geolocalização.";
	}	
	console.log(retorno);
	return retorno;
}

function showPosition(position) {
	let latitude  = position.coords.latitude;
	let longitude = position.coords.longitude
	
	const coordenadas = {lat: latitude, long: longitude};
	let {lat,long} = coordenadas;
	
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
	
	// Chama função passando coordenadas do local onde o usuário está 
	initMap(NovoPonto.getLat(),NovoPonto.getLong());	
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
function initMap(lat,long) {
	
	// Inicializa função para carregar local do usuário
	getLocation();	

	var latitude = lat;
	var longitude = long;
	
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