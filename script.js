var svg = document.getElementById("svg");
var b1 = document.getElementById("norway");
var b2 = document.getElementById("us");
var norwayMedals = [14, 14, 11]
var usMedals = [9, 8, 6]

var changeN = function(){
    var p = d3.select("svg")
	.selectAll("circle")
	.data(norwayMedals)
	.attr("r", function(d){return 6*d});
}

var changeU = function(){
    var p = d3.select("svg")
	.selectAll("circle")
	.data(usMedals)
	.attr("r", function(d){return 6*d});
}

b1.addEventListener('click', changeN);
b2.addEventListener('click', changeU);
