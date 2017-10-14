function convert(inputString) {
	var numSpaces = (inputString.match(/ /g) || []).length;
	console.log(numSpaces);
	var stringStripped = inputString.replace(/[aeiou ]/ig,'').toLowerCase();
	

	unique_random_numbers = [];
                                    //Natural numbers than existemt in a
                                    // given range
	while (unique_random_numbers.length < numSpaces) {
   		 var random_number = Math.round(Math.random()*(stringStripped.length - 3) + 1);
    	console.log(random_number);
    	if (unique_random_numbers.indexOf(random_number) == -1) { 
        // Yay! new random number

    	    unique_random_numbers.push( random_number );

    	}
	}

	unique_random_numbers = unique_random_numbers.sort();
	for (i = 0; i < unique_random_numbers.length; i++) { 
		stringStripped = [stringStripped.slice(0, unique_random_numbers[i] + i), " ", stringStripped.slice(unique_random_numbers[i] + i)].join('');
	} 
	return stringStripped; 
}