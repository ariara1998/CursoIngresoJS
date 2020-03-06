function mostrar()
{
var pais;
var habitantes;
var temperatura;
var respuesta;
var contadorTempPar=0;
var flag=0;
var paisMin;
var habitantesMin;
var contadorMasCuarenta=0;
var promedioHab;
var contador=0;
var sumaHab=0;
var temperarutaMin;
var paisTempMin;

do{
    pais = prompt("Ingrese el nombre del pais.");
    habitantes = parseInt(prompt("Ingrese la cantidad de habitantes en millones entre 1 y 7000"));
    while(habitantes<1 || habitantes>7000 || isNaN(habitantes)){
        habitantes = parseInt(prompt("Cantidad invaida. Ingrese la cantidad de habitantes en millones entre 1 y 7000."));
    }
    temperatura = parseInt(prompt("Ingrese la temperaruta mínima que se registra en su territorio entre -50 y 50."));
    while(temperatura<-50 || temperatura>50 || isNaN(temperatura)){
        temperatura = parseInt(prompt("Temperatura invalida. Ingrese la temperaruta mínima que se registra en su territorio entre -50 y 50."));  
    }
    if(temperatura%2 == 0){
        contadorTempPar++;
    }
    if(contador==0 || habitantes<habitantesMin){
        habitantesMin=habitantes;
        paisMin=pais;
        flag=1;
    }
    if(temperatura>40){
        contadorMasCuarenta++;
    }
    if(contador==0 || temperatura<temperarutaMin){
        temperarutaMin=temperatura;
        paisTempMin=pais;
    }
    sumaHab=sumaHab+habitantes;
    contador++;
    respuesta= prompt("Quiere seguir?");
}while(respuesta=='si')

promedioHab=sumaHab/contador;

document.write("a) La cantidad de temperaturas pares:" + contadorTempPar + "</br>");
document.write("b) El nombre del pais con menos habitantes: " + paisMin + "</br>");
document.write("c) la cantidad de paises que superan los 40 grados:" + contadorMasCuarenta + "</br>");
document.write("d) el promedio de habitantes entre los paises ingresados: " + promedioHab + "</br>");
document.write("f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura:" + temperarutaMin + " en " + paisTempMin + "</br>");


}
