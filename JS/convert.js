function convert(inputString) {
	var numSpaces = (inputString.match(/ /g) || []).length;
	var stringStripped = inputString.replace(/[aeiou ]/ig,'').toLowerCase;
	var locs = new Array(numSpaces - 1);
	for (i = 0; i < numSpaces; i++) { 
		//generating a location between 1 and the index of the second to last item
    
    	while (1 == 1) {
    		var locs[i] = Math.ceiling(Math.random() * stringStripped.length - 2);
    		for (j = i; j > 0; j-- ) {
    			if (locs[i] == locs[j]) {
    				continue
    			}
    		}
    		break
    	}
    	stringStripped = stringStripped.substring(0,locs[i] ) + " " + stringStripped.substring(locs[i]);
	}
	return stringStripped;
}