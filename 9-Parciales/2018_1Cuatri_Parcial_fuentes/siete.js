function mostrar()
{
var nota;
var sexo;
var notaMenor;
var sexoMenor;
var flag=0;
var contador=0;
var promedioNota;
var notatotal=0;
 

for(var i = 0;i<5;i++){
    nota = parseInt(prompt("Igrese la nota"));
    while(nota<0 || nota>10 || isNaN(nota)){
        nota = parseInt(prompt("Error. Ingrese la nota"));
    }
    notatotal = notatotal + nota;
    sexo = prompt("Ingrese sexo");
    while(sexo != "f" && sexo != "m"){
        sexo = prompt("Error. Ingrese sexo");
    }
    if(nota<notaMenor || flag == 0){
        notaMenor = nota;
        sexoMenor = sexo;
        flag = 1;
    }
    if(nota>=6 && sexo == "m"){
        contador++;
    }
}
promedioNota = notatotal /5;

alert("Promedio de notas: " + promedioNota + "\nNota mas baja: " + notaMenor + "\nSexo con la nota mas baja: " + sexoMenor +"\nCantidad de varones con nota mayor o igual a 6: " + contador);
}
