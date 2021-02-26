var valores = [true, 5, false, "hola", "adios", 2];

if(valores[3]>valores[4]){
    alert("Primera palabra mayor");
}else{
    alert("Segunda palabra mayor");
}

alert(valores[0]);
alert(valores[2]);
var suma=valores[1]+valores[5];
var resta=valores[1]-valores[5];
var multi=valores[1]*valores[5];
var divi=valores[1]/valores[5];
var resto=valores[1]%valores[5];

alert("Suma:"+ suma);
alert("Resta:"+ resta);
alert("Multiplicación:"+ multi);
alert("División:"+ divi);
alert("Resto:"+ resto);