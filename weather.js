$(document).ready(function(){
	
	$('#submitWeather').click(function() {
		var city=$("#city").val();
		
		if(city!=''){
			$.ajax({
				url: 'http://api.openweathermap.org/data/2.5/weather?q=' +city+"&units=metric" + 
				"&APPID=c10bb3bd22f90d636baa008b1529ee25",
				type:"GET",
				dataType:"jsonp",
				success: function(data){
					
					var widget = show(data);
					$("#show").html(widget);
					$("#city").val('');
					var widget1 = show1(data);
					$("#show1").html(widget1);
					$("#city").val('');
					var widget2 = show2(data);
					$("#show2").html(widget2);
					$("#city").val('');
					var widget3 = show3(data);
					$("#show3").html(widget3);
					$("#city3").val('');
					var widget4 = show4(data);
					$("#show4").html(widget4);
					$("#city").val('');
					var widget5 = show5(data);
					$("#show5").html(widget5);
					$("#city").val('');
				}
			});
		}else{
			$("#error").html('Field cannot be empty');
		}
	});
});
function show(data){
	
	return "<div><h2><strong><b>CITY</b></strong>: "+ $("#city").val() +"</h3></div>" +
	"<h3><strong>Weather</strong>: "+ data.weather[0].main + "</h3>" +
	"<h3><strong>Weather</strong>: "+ data.weather[0].description +"</h3>";
}

function show1(data){
	
	return "<h3><strong>Temperature</strong>: <br>"+ data.main.temp +" <sup>o</sup>C " + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h3>";
}
function show2(data){
	
	return "<h3><strong>Pressure</strong>: <br>" + data.main.pressure +" &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h3>";
}
function show3(data){
	
	return "<h3><strong>Humidity</strong>: <br>" + data.main.humidity +" &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h3><h3></h3>";
}
function show4(data){
	
	return "<h3><strong>Min. Temperature</strong>: <br>" + data.main.temp_min +" <sup>o</sup>C" + "</h3>";
}


function show5(data){
	
	return "<h3><strong>Max. Temperature</strong>: <br>" + data.main.temp_max +" <sup>o</sup>C" + "</h3>" ;
}
