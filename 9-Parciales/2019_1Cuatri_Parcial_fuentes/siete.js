function mostrar()
{
var altura;
var sexo;
var sumaAltura=0;
var promedioAltura;
var alturaMin;
var sexoMin;
var flag = 0;
var contadorMujAltas=0;


for(var i = 0;i<5;i++){
    altura = parseInt(prompt("Ingrese una altura entre 0 y 250 centimetros."));
    while(altura<0 || altura>250 || isNaN(altura)){
        altura = parseInt(prompt("Altura invalida. Ingrese una altura emtre 0 y 250."));
    }
    sexo = prompt("Ingrese sexo con f o m.");
    while(sexo != "f" && sexo != "m"){
        sexo = prompt("Sexo invalido. Ingrese sexo con f o m.");    
    }
    if(flag==0 ||altura<alturaMin){
        alturaMin = altura;
        sexoMin = sexo;
        flag=1;
    }
    if(sexo=="f" && altura>190){
        contadorMujAltas++;
    }
    sumaAltura=sumaAltura+altura;
}

promedioAltura=sumaAltura/i;

document.write("a) El promedio de las alturas totales: " + promedioAltura + "cm</br>");
document.write("b) La altura más baja y el sexo de esa persona:" + alturaMin + "cm y sexo " + sexoMin + "</br>");
document.write("c) La cantidad de muheres que su altura supere los 190 centimetros: " + contadorMujAltas );

}

 