var cadena=prompt("Inserta una cadena");


function saber(cad) {

    var resultado = "La cadena ";
  
    // Comprobar mayúsculas y minúsculas
    if(cad == cad.toUpperCase()) {
      resultado += " está formada sólo por mayúsculas";
    }
    else if(cad == cad.toLowerCase()) {
      resultado += " está formada sólo por minúsculas";
    }
    else {
      resultado += " está formada por mayúsculas y minúsculas";
    }
  
    return resultado;
  }

alert(saber(cadena));