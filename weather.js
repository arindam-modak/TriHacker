$(document).ready(function(){
	var sum=0;
	var num=0;
	function foo() {

		if( typeof foo.counter == 'undefined' ) {
			foo.counter = 0;
		}
		foo.counter++;
		document.write(foo.counter+"<br />");
	}
	$('#submitWeather').click(function() {
		var city=$("#city").val();
		
		if(city!=''){
			$.ajax({
				url: 'http://api.openweathermap.org/data/2.5/weather?q=' +city+"&units=metric" + 
				"&APPID=c10bb3bd22f90d636baa008b1529ee25",
				type:"GET",
				dataType:"jsonp",
				success: function(data){
					
					var widget = show(data,sum,num);
					$("#show").html(widget);
					$("#city").val('');
				}
			});
		}else{
			$("#error").html('Field cannot be empty');
		}
	});
});
function show(data,sum,num){
	sum += data.main.temp;
	num += 1;
	
	return "<h2><strong><u>CITY</u></strong>: "+ $("#city").val() +"</h3>" +
	"<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" +
	"<h3><strong>Weather</strong>: "+ data.weather[0].description +"</h3>" +
	"<h3><strong>Temperature</strong>: "+ data.main.temp +"</h3>" +
	"<h3><strong>Pressure</strong>: " + data.main.pressure +"</h3>" +
	"<h3><strong>Humidity</strong>: " + data.main.humidity +"</h3>" +
	"<h3><strong>Min. Temperature</strong>: " + data.main.temp_min+"</h3>" +
	"<h3><strong>Max. Temperature</strong>: " + data.main.temp_max +"</h3>" +
	"<h3><strong>Wind Speed</strong>: " + data.wind.speed+"</h3>" ;
	
}
