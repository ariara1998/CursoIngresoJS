/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var total;

    largo = document.getElementById("Largo").value;
    largo = parseInt(largo);
    ancho = document.getElementById("Ancho").value;
    ancho = parseInt(ancho);

    total = (largo * 2 + ancho * 2) * 3;

    alert("Se necesita " + total + "m de alambre.");

}
function Circulo () 
{
    var radio;
    var total;

    radio = document.getElementById("Radio").value;
    redio = parseInt(radio);

    total = radio * 2 * Math.PI * 3 ;
    total = parseFloat(total).toFixed(2);

    alert("Se necesita " + total + "m de alambre.");
    
}
function Materiales () 
{
	var largo;
    var ancho;
    var cemento;
    var cal;

    largo = document.getElementById("Largo").value;
    largo = parseInt(largo);
    ancho = document.getElementById("Ancho").value;
    ancho = parseInt(ancho);

    cemento = largo * ancho * 2;
    cal = largo * ancho * 3;

    alert("Se necesita " + cemento + " bolsas de cemento y " + cal + " de cal.")

}