var ErrorMessage1 = "No Data Found Please Try Again !!!!!! (And Please Refresh Window Before Another Request)" ;
var ErrorMessage2 = "Please add correct Coordinates !!!!!! (And Please Refresh Window Before Another Request)" ;

$('#btnCountryCode').click(function() {

	$.ajax({
		url: "libs/php/getCountryInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			country: $('#selCountry').val(),
			lang: $('#selLanguage').val()
		},
		message : alert("Loading......") ,
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {
				if(!result.data){   
					$('#resultError').text(ErrorMessage1)
				}
				$('#txt1').html(result['data'][0]['continent']);
				$('#txt2').html(result['data'][0]['capital']);
				$('#txt3').html(result['data'][0]['languages']);
				$('#txt4').html(result['data'][0]['population']);
				$('#txt5').html(result['data'][0]['areaInSqKm']);

				

			}
		
		},
		error: function(jqXHR, status, error) {
					let errorMessage = jqXHR.status + ': ' + jqXHR.statusText ;
					$('#resultError').text(ErrorMessage2)
			}
	}); 

});
	

	

	$('#btnPlace').click(function() {

		$.ajax({
			url: "libs/php/getPlace.php",
			type: 'POST',
			dataType: 'json',
			data: {
				latitude: $('#latValue').val(),
				longitude: $('#lngValue').val()
			},
			message : alert("Loading......") ,
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {
					if(!result.data && result.data.length == 0){   
						
						$('#resultError').text(ErrorMessage1)
					}
					$('#txt1').html(result['data'][0]['distance']);
					$('#txt2').html(result['data'][0]['asciiName']);
					$('#txt3').html(result['data'][0]['countryName']);
					$('#txt4').html(result['data'][0]['continentCode']);
					$('#txt5').html(result['data'][0]['timezone']['timeZoneId']);

				}
			
			},
			error: function(jqXHR, status, error) {
						let errorMessage = jqXHR.status + ': ' + jqXHR.statusText ;
						$('#resultError').text(ErrorMessage2)
				}
		}); 
	
	});

	$('#weather').click(function() {

		$.ajax({
			url: "libs/php/weather.php",
			type: 'POST',
			dataType: 'json',
			data: {
				north: $('#northValue').val(),
				south: $('#southValue').val(),
				east: $('#eastValue').val(),
				west: $('#westValue').val()
			},
			message : alert("Loading......") ,
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {
					if(!result.data){    
						$('#resultError').text(ErrorMessage1)
						}	
					$('#txt1').html(result['language']);
					$('#txt2').html(result['data']);
					$('#txt3').html(result['data'][0]['countryName']);
					$('#txt4').html(result['data'][0]['continentCode']);
					$('#txt5').html(result['data'][0]['timezone']['timeZoneId']);

				}
			
			},
			error: function(jqXHR, status, error) {
						let errorMessage = jqXHR.status + ': ' + jqXHR.statusText ;
						$('#resultError').text(ErrorMessage2)
					}
		}); 
	
	});

	$('#btnPlace2').click(function() {

		$.ajax({
			url: "libs/php/neighbourhood.php",
			type: 'POST',
			dataType: 'json',
			data: {
				geonameid: $('#geonameid').val()
			},
			message : alert("Loading......") ,
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {
					if(!result.data){   
						$('#resultError').text(ErrorMessage1)
						}
					$('#txt1').html(result['data'][0]['distance']);
					$('#txt2').html(result['data'][0]['countryName']); 
					$('#txt3').html(result['data'][0]['population']);
					$('#txt4').html(result['data'][0]['toponymName']);
					$('#txt5').html(result['data'][0]['timezone']['timeZoneId']);

				}
			
			},
			error: function(jqXHR, status, error) {
						let errorMessage = jqXHR.status + ': ' + jqXHR.statusText ;
						$('#resultError').text(ErrorMessage2)
						
				}
		}); 
	
	});
	