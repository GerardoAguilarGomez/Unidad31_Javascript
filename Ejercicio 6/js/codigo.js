var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var dni=prompt("Inserta tu dni");

var numero=dni.substr(0,8);
var letra=dni.substr(dni.length-1,1);
//alert(numero);
//alert(letra);
if(numero<0 || numero>99999999){
  alert("El número no es valido");
}else{
  var letra_comprobada=letras[numero%23];
  //alert(letra_comprobada);
  if(letra_comprobada==letra){
alert("El número y la letra son correctos")
  }else{
alert("La letra no es correcta");
  }
}