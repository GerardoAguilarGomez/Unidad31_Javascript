var cadena=prompt("Inserta una cadena");


function saber(cad) {
  var procesado = cad.replace(/\s+/g, '');
  var mitad=procesado.length/2;
  var comprobacion=true;

  
  for(var i=0;i<=mitad-1;i++){
    if(procesado.charAt(i)!=procesado.charAt(procesado.length-i-1)){
      comprobacion=false;
    }
  }

  if(comprobacion==true){
    return "Capicua";
  }else{
    return "No capicua";
  }
  }

alert(saber(cadena));