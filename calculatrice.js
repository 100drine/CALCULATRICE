function calculer(){


var capture1 = parseInt(document.getElementById('premierNb').value);
var capture2 = parseInt(document.getElementById('secondNb').value);

if(document.getElementById('r1').checked){

	var addition = capture1 + capture2;

document.getElementById('afficher').innerHTML = addition;
	

}
else if (document.getElementById('r2').checked) {
	var soustraction = capture1 - capture2;
	document.getElementById('afficher').innerHTML = soustraction;
}
else if (document.getElementById('r3').checked) {
	var multiplication = capture1 * capture2;
	document.getElementById('afficher').innerHTML = multiplication;
}
else if (document.getElementById('r4').checked) {
	var division = capture1 / capture2;
	document.getElementById('afficher').innerHTML = division;
}
}