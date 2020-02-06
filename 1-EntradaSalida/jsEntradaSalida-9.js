/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe;
    var diesporciento;
    var resultado;

    importe = parseInt(document.getElementById("sueldo").value);

    diesporciento = importe / 10;

    resultado = importe + diesporciento;

    document.getElementById("resultado").value = resultado;
	
}
