function mostrar()
{

var numero = prompt("ingrese un número entre 0 y 9.");

while(numero > 9 || numero < 0 || isNaN(numero)){

	numero = parseInt(prompt("ingrese un número entre 0 y 9."));
}

 document.getElementById("Numero").value = numero
}//FIN DE LA FUNCIÓN