var numero=prompt("Inserta un número entero");
var total=numero;
for(var i=numero-1;i>=1;i--){
total=total*i;
}
alert(numero + "!= " + total);