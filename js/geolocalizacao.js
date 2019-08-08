const x = document.getElementById("demo");
var map ;

// array de coordenadas e endereços 
pontos = [
	{
		"Latitude":-19.931349,
		"Longitude": -43.934431 ,
		"Endereco": 'Avenida Brasil, 1666 - Santa Efigênia'
	},
	
	{
		"Latitude": -19.929958,
		"Longitude": -43.937014,
		"Endereco": 'Rua Bernardo Guimarães, 1399-1255 - Funcionários'
	},
	{
		"Latitude": -19.934094,
		"Longitude": -43.936242,
		"Endereco": 'Rua Santa Rita Durão, 1245-1101 - Funcionários'

	},
	{
		"Latitude": -19.932754,
		"Longitude":-43.945150,
		"Endereco": 'Rua Curitiba, 2258 - Lourdes'
	},
	{
		"Latitude": -19.935498,
		"Longitude":-43.958608,
		"Endereco": 'Rua Afonso XIII, 593-497 - Gutierrez'
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




