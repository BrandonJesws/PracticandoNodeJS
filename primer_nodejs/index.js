/*
	Utilizando modulo creado 

const mat = require('./mate.js');
console.log(mat.sumar(5, 3));
console.log(mat.restar(5, 3));
console.log(mat.multiplicar(5, 3));
console.log(mat.dividir(6, 3));
*/

/*
	Utilizando el moduso de sistema operativo

const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('Memoria libre: ', os.freemem());
console.log('Memoria total: ', os.totalmem());
*/

/*
	Utilizando file system para crear archivo
	y viendo como funciona asíncronamente

const fs = require('fs');

fs.writeFile('./texto.txt', 'Linea uno', function(err){
	if(err){
		console.log(err);
	}
	console.log('Archivo creado');
	
});

console.log('Ultima linea de codigo');
*/
/*
	Leyendo y mostrando en pantalla
	el archivo txt

const fs = require('fs');

fs.readFile('./texto.txt', function(err, data){
	if(err){
		console.log(err);
	}
	console.log(data.toString());
});
*/

const http = require('http');
const colors = require('colors');
/*
	Original
http.createServer(function(req, res){
	res.writeHead(200, {'Content-type': 'text/html'});
	res.write('<h1>Hola Mundo desde Nodejs</h1>');
	res.end();
}).listen(3000);
*/

const handleServer = function(req, res){
	res.writeHead(200, {'Content-type': 'text/html'});
	res.write('<h1>Hola Mundo desde Nodejs</h1>');
	res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
	console.log('Servidor en el puerto 3000'.green);
})