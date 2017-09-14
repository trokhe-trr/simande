function random(n) {
	var mult = 11834;

	var x = Math.cos(n) * mult;

	return x - Math.floor(x);
};

var getVector = function(start,end,qt){
	var today = new Date();
	var n = today.getTime();

	var seed = n;  

	var vet = [];

	for(var i=0; i<qt; i++){
		var r = random(seed++)*(end-start)+start
		vet.push(Math.floor(r));
	}

	return vet;
};

function calculate() {
	var start = document.getElementById('interval_min').value;
	var end = document.getElementById('interval_max').value;
	var qt = document.getElementById('qt').value;
	var result = getVector(start,end,qt);

	document.getElementById('result').innerHTML = "[ ";

	for(var i=0; i<qt-1; i++){
		document.getElementById('result').innerHTML += result[i]+" | ";
	}

	document.getElementById('result').innerHTML += result[i]+" ]";
}
