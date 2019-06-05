const Mate = {};

function sumar(x, y){
	return x+y;
}

function restar(x, y){
	return x-y;
}

function multiplicar(x, y){
	return x*y;
}

function dividir(x, y){
	if(y == 0){
		console.log("no se puede dividir entre cero");
	}else{
		return x/y;
	}
}

/*
exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
*/

Mate.sumar = sumar;
Mate.restar = restar;
Mate.multiplicar = multiplicar;
Mate.dividir = dividir;

module.exports = Mate;