function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
		}
		if(numero > 0){
			positivo += numero;
		}
		else{
			negativo *= numero;
			contador++;
		}
		respuesta = prompt("Seguir acumulando");

	}while(respuesta == 'si');

	if(contador == 0){
		negativo = 0;
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN