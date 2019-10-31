var texto = document.getElementById('texto_lineas');
var col = document.getElementById('texto_color');
var boton = document.getElementById('botoncito');
boton.addEventListener('click', dibujoporclick);

var d = document.getElementById('dibujito');
var ancho = d.width;
var lienzo = d.getContext('2d');

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal) {
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}
function dibujoporclick() {
	var xxx = parseInt(texto.value);
	var lineas = xxx;
	var l = 0;
	var yi, xf;
	var color_usuario = col.value;
	var espacio = ancho / lineas;

	if (col.value == 'AZUL') color_usuario = 'blue';
	else if (col.value == 'BLANCO' ||col.value == 'BLANCA') color_usuario = 'white';
	else if (col.value == 'ROJO'||col.value == 'ROJA') color_usuario = 'red';
	else if (col.value == 'AMARILLO'||col.value == 'AMARILLA') color_usuario = 'yellow';
	else if (col.value == 'ROSADO'||col.value == 'ROSADA') color_usuario = 'pink';
	else if (col.value == 'NARANJA') color_usuario = 'orange';
	else if (col.value == 'MARRON') color_usuario = 'brown';
	else if (col.value == 'GRIS') color_usuario = 'gray';
	else if (col.value == 'MORADO'||col.value == 'MORADA') color_usuario = 'purple';
	else if (col.value == 'VERDE') color_usuario = 'green';
	else if (col.value == '') alert('Escriba un color');

	for (l = 0; l < lineas; l++) {
		yi = espacio * l;
		xf = espacio * (l + 1);
		dibujarlinea(color_usuario, 0, yi, xf, 300);
	}

	dibujarlinea(color_usuario, 1, 1, 1, 300);
	dibujarlinea(color_usuario, 1, 299, 299, 299);

	var yf, xi;

	for (l = 0; l < lineas; l++) {
		yf = espacio * l;
		xi = espacio * (l + 1);
		dibujarlinea(color_usuario, xi, 0, 300, yf);
	}

	dibujarlinea(color_usuario, 300, 1, 1, 1);
	dibujarlinea(color_usuario, 299, 299, 299, 1);
	dibujarlinea(color_usuario, 1, 1, 1, 300);
	dibujarlinea(color_usuario, 1, 299, 299, 299);
}
