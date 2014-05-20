	// Conversion based on http://turner.faculty.swau.edu/mathematics/materialslibrary/roman/
	function romanToAbaric( input ){
		var source = input.trim().toUpperCase().split("");
		var index = 0;
		var total = 0;
		while ( index < source.length){
			var value1 = convert(source[index]);
			var value2 = 0;
			try {
				value2 = convert(source[index + 1]);
			} catch (e){}
			if (value1 >= value2){
				total += value1;
				index++;
			} else if (	value1 < value2 ){
				total += value2 - value1;
				index += 2;
			}				
		}	
		return total;
	}
	
	var conversionTable = [];
	conversionTable["I".charCodeAt(0)] = 1;
	conversionTable["V".charCodeAt(0)] = 5;
	conversionTable["X".charCodeAt(0)] = 10;
	conversionTable["L".charCodeAt(0)] = 50;
	conversionTable["C".charCodeAt(0)] = 100;
	conversionTable["D".charCodeAt(0)] = 500;
	conversionTable["M".charCodeAt(0)] = 1000;
	
	function convert( value ) {
		return conversionTable[value.charCodeAt(0)]
	}	
	
