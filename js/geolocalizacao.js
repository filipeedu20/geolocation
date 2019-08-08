const x = document.getElementById("demo");
var map ;

// array de coordenadas e endereços 
pontos = [
	{
		"Latitude": -19.918178,
		"Longitude": -43.942461,
		"Endereco": 'Nome da rua 1'
	},
	
	{
		"Latitude": -19.920393,
		"Longitude": -43.944180,
		"Endereco": 'Nome da rua 2'
	},
	{
		"Latitude": -19.915134,
		"Longitude": -43.947737,
		"Endereco": 'Nome da rua 3'

	},
	{
		"Latitude": -19.904994,
		"Longitude": -43.898574,
		"Endereco": 'Nome da rua 4'
	}

];

function lista_endereco(pontos){	
	$('.nome_local').remove();
	$.each(pontos, function(index, pontos) {
		// lista nome dos endereços em uma div
		$(".endereco").append("<div class='nome_local'>"+pontos.Endereco+"</div>");
	});
}

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
	// lista endereços
	lista_endereco(pontos)
}
		
function loadLocations(pontos){
	

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
	loadLocations(pontos);

	// lista endereços próximo ao usuário	
}




