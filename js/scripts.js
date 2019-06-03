var weight = prompt('weight:');
var height = prompt('height:');

var bodyMI = function(weight, height) {
	return 703 * (weight/(height*height));
}

alert('Your BMI is: ' + bodyMI(weight, height).toPrecision(3));
