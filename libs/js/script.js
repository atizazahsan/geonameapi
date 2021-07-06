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

				$('#txt1').html(result['data'][0]['continent']);
				$('#txt2').html(result['data'][0]['capital']);
				$('#txt3').html(result['data'][0]['languages']);
				$('#txt4').html(result['data'][0]['population']);
				$('#txt5').html(result['data'][0]['areaInSqKm']);

			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		}
	}); 

});
	
	
	// $('#btnCountryCode').click(function() {

	// 	$.ajax({
	// 		url: "libs/php/CountryCode.php",
	// 		type: 'POST',
	// 		dataType: 'json',
	// 		data: {
	// 			latitudeCountryCode: $('#latValue2').val(),
	// 			longitudeCountryCode: $('#lngValue2').val() 
	// 		},
	// 		message : alert("First Clicked") ,
	// 		success: function(result) {

	// 			console.log(JSON.stringify(result));

	// 			if (result.status.name == "ok") {

	// 				$('#txt1').html(result['data']['earthquakes']['0']);
	// 				$('#txt2').html(result['data'][0]['capital']);
	// 				$('#txt3').html(result['data'][0]['languages']);
	// 				$('#txt4').html(result['data'][0]['population']);
	// 				$('#txt5').html(result['data'][0]['areaInSqKm']);

	// 			}
			
	// 		},
	// 		error: function(jqXHR, textStatus, errorThrown) {
	// 			// your error code
	// 		}
	// 	}); 
	
	// });

	

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

					$('#txt1').html(result['data'][0]['distance']);
					$('#txt2').html(result['data'][0]['asciiName']);
					$('#txt3').html(result['data'][0]['countryName']);
					$('#txt4').html(result['data'][0]['continentCode']);
					$('#txt5').html(result['data'][0]['timezone']['timeZoneId']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});

	$('#btnPlace2').click(function() {

		$.ajax({
			url: "libs/php/neighbourhood.php",
			type: 'POST',
			dataType: 'json',
			data: {
				latitude2: $('#latValue2').val(),
				longitude2: $('#lngValue2').val()
			},
			message : alert("Loading......1") ,
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#txt1').html(result['data'][0]['distance']);
					$('#txt2').html(result['data'][0]['asciiName']);
					$('#txt3').html(result['data'][0]['countryName']);
					$('#txt4').html(result['data'][0]['continentCode']);
					$('#txt5').html(result['data'][0]['timezone']['timeZoneId']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
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

					$('#txt1').html(result['language']);
					$('#txt2').html(result['data']);
					$('#txt3').html(result['data'][0]['countryName']);
					$('#txt4').html(result['data'][0]['continentCode']);
					$('#txt5').html(result['data'][0]['timezone']['timeZoneId']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});