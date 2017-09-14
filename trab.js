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
	console.log("aqui3");

	for(var i=0; i<qt; i++){
		var r = random(seed++)*(end-start)+start
		console.log("aquix");
		vet.push(r);
	}

	console.log("aqui4");

	return vet;
};

function calculate() {
	var start = document.getElementById('interval_min').value;
	var end = document.getElementById('interval_max').value;
	var qt = document.getElementById('qt').value;
	var result = getVector(start,end,qt);

	document.getElementById('result').innerHTML = "["+result+"]";
}
