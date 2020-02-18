/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahrenheit;
    var centígrados;

    fahrenheit = document.getElementById("Temperatura").value;
    fahrenheit = parseFloat(fahrenheit).toFixed(1);

    centígrados = (fahrenheit - 32) * 5 / 9;
    centígrados = parseFloat(centígrados).toFixed(1);

    alert(fahrenheit + " Fahrenheit son " + centígrados + " centígrados.");

}

function CentigradosFahrenheit () 
{
    var centígrados;
    var fahrenheit;

    centígrados = document.getElementById("Temperatura").value;
    centígrados = parseFloat(centígrados).toFixed(1);

    fahrenheit = (centígrados * 9/5) + 32;
    fahrenheit = parseFloat(fahrenheit).toFixed(1);

    alert(centígrados + " centígrados son " + fahrenheit + " Fahrenheit.");
}
