// it creates our Crypto class
// it takes a string as an arguement
var Crypto = function (text) {
	// store the string for use elsewhere
	this.text = text;
};

Crypto.prototype.normalizePlaintext = function() {
	return this.text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();	
}
	// it can normalize strange characters
	// it can normalize numbers

Crypto.prototype.size = function (text) {
	var length = this.normalizePlaintext().length
	return Math.ceil(Math.sqrt(length));
	// it can adjust to size of a small square
	// it can adjust to the size of small square with additional non-numbered characters
	// it can adjust to the size of a slightly larger square
	// it can adjust to the size of non-perfect ssquare
};

Crypto.prototype.plaintextSegments = function () {
	var segments = [],
		npt = this.normalizePlaintext(),
		size = this.size();
	// loop through all the characters in npt
	for (var i = 0; i < npt.length; i += size) {
		segments.push(npt.substr(i,size));
	}
		// add a string a of characters to our array of segments
	return segments;
	// split plain text segments
};

Crypto.prototype.ciphertext = function () {
	var code = "";
		size = this.size();
		segs = this.plaintextSegments();
	for (var i = 0; i < size; i += 1) {
		// loop through the rows
		for (var j = 0; j < segs.length; j += 1)
			code += segs[j].charAt(i);
	}
	return code;
};

module.exports = Crypto;
