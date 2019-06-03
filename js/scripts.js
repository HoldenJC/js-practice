//Calculator to find user BMI to 3 digit accuracy
var weight = prompt('weight:');
var height = prompt('height:');

var bodyMI = function(weight, height) {
	return 703 * (weight/(height*height));
}

alert('Your BMI is: ' + bodyMI(weight, height).toPrecision(3));


//Convert user input of degree Fahrenheit to Degree Celcius to 3 digit accuracy
/*
var tempF = prompt('Temperature in F you wish to convert to C:');

var tempC = function(tempF) {
	return (tempF - 32) * 5 / 9;
}

alert('Temp in C: ' + tempC(tempF).toPrecision(3));
*/
