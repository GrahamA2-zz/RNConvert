	// Conversion based on http://turner.faculty.swau.edu/mathematics/materialslibrary/roman/
	function abaricToRoman( input ){
		
		if (input.length === 0){
			throw  "Enter a value to convert";
		}
		
		var source = parseInt(input.trim());
		if (isNaN(source)){
			throw "<b>" + input + "</b> is not a valid Arabic Numeral!";
		}
		
		if ( source > 10000 || source < 1 ){
			throw "<b>" + source + "</b> is to big to convert!";
		}

		var total = "";
		//Convert to a long form 		
		while ( source >= 1000 ){
			total = total + "M";
			source -= 1000;
		}
		while ( source > 500 ){
			total = total + "D";
			source -= 500;
		}
		while ( source > 100 ){
			total = total + "C";
			source -= 100;
		}
		while ( source > 50 ){
			total = total + "L";
			source -= 50;
		}
		while ( source > 10 ){
			total = total + "X";
			source -= 10;
		}
		while ( source > 5 ){
			total = total + "V";
			source -= 5;
		}	
		while ( source > 0 ){
			total = total + "I";
			source -= 1;
		}
		//Apply the subtractive forms
		total = total.replace("DCCCC", "CM");
		total = total.replace("CCCC", "CD");
		total = total.replace("LXXXX", "XC");
		total = total.replace("XXXX", "XL");
		total = total.replace("IIII", "IV");
		total = total.replace("VIV", "IX"); // Not a valid form at any time!
		return total;
	}