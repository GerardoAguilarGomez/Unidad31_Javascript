var numero=prompt("Inserta un número entero");

var saber=num=>{
    if(num%2==0){
        return "Par";
    }else{
        return "Impar"
    }
}

alert(saber(numero));